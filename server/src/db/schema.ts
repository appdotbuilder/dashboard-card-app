import { serial, text, pgTable, timestamp, integer } from 'drizzle-orm/pg-core';

// Summary cards table
export const summaryCardsTable = pgTable('summary_cards', {
  id: serial('id').primaryKey(),
  card_id: text('card_id').notNull().unique(),
  label: text('label').notNull(),
  value: text('value').notNull(),
  unit: text('unit').notNull(),
  icon_path: text('icon_path').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull()
});

// Detail cards table
export const detailCardsTable = pgTable('detail_cards', {
  id: serial('id').primaryKey(),
  card_id: text('card_id').notNull().unique(),
  title: text('title').notNull(),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull()
});

// Detail sections table (belongs to detail cards)
export const detailSectionsTable = pgTable('detail_sections', {
  id: serial('id').primaryKey(),
  section_id: text('section_id').notNull().unique(),
  card_id: text('card_id').notNull(),
  title: text('title').notNull(),
  sort_order: integer('sort_order').notNull().default(0),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull()
});

// Detail items table (belongs to detail sections)
export const detailItemsTable = pgTable('detail_items', {
  id: serial('id').primaryKey(),
  item_id: text('item_id').notNull().unique(),
  section_id: text('section_id').notNull(),
  description: text('description').notNull(),
  volume: text('volume').notNull(),
  unit: text('unit').notNull(),
  sort_order: integer('sort_order').notNull().default(0),
  created_at: timestamp('created_at').defaultNow().notNull(),
  updated_at: timestamp('updated_at').defaultNow().notNull()
});

// TypeScript types for the table schemas
export type SummaryCard = typeof summaryCardsTable.$inferSelect;
export type NewSummaryCard = typeof summaryCardsTable.$inferInsert;

export type DetailCard = typeof detailCardsTable.$inferSelect;
export type NewDetailCard = typeof detailCardsTable.$inferInsert;

export type DetailSection = typeof detailSectionsTable.$inferSelect;
export type NewDetailSection = typeof detailSectionsTable.$inferInsert;

export type DetailItem = typeof detailItemsTable.$inferSelect;
export type NewDetailItem = typeof detailItemsTable.$inferInsert;

// Export all tables for relation queries
export const tables = { 
  summaryCards: summaryCardsTable,
  detailCards: detailCardsTable,
  detailSections: detailSectionsTable,
  detailItems: detailItemsTable
};