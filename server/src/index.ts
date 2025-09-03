import { initTRPC } from '@trpc/server';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import 'dotenv/config';
import cors from 'cors';
import superjson from 'superjson';

// Import schemas
import { 
  getSummaryCardsInputSchema, 
  getDetailCardsInputSchema, 
  getDashboardDataInputSchema 
} from './schema';

// Import handlers
import { getSummaryCards } from './handlers/get_summary_cards';
import { getDetailCards } from './handlers/get_detail_cards';
import { getDashboardData } from './handlers/get_dashboard_data';

const t = initTRPC.create({
  transformer: superjson,
});

const publicProcedure = t.procedure;
const router = t.router;

const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }),
  
  // Dashboard endpoints
  getSummaryCards: publicProcedure
    .input(getSummaryCardsInputSchema)
    .query(() => getSummaryCards()),
    
  getDetailCards: publicProcedure
    .input(getDetailCardsInputSchema)
    .query(() => getDetailCards()),
    
  getDashboardData: publicProcedure
    .input(getDashboardDataInputSchema)
    .query(() => getDashboardData()),
});

export type AppRouter = typeof appRouter;

async function start() {
  const port = process.env['SERVER_PORT'] || 2022;
  const server = createHTTPServer({
    middleware: (req, res, next) => {
      cors()(req, res, next);
    },
    router: appRouter,
    createContext() {
      return {};
    },
  });
  server.listen(port);
  console.log(`TRPC server listening at port: ${port}`);
}

start();