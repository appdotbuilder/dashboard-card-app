import { z } from 'zod';

// Summary card schema
export const summaryCardSchema = z.object({
  id: z.string(),
  label: z.string(),
  value: z.string(),
  unit: z.string(),
  iconPath: z.string()
});

export type SummaryCard = z.infer<typeof summaryCardSchema>;

// Detail item schema for table rows
export const detailItemSchema = z.object({
  description: z.string(), // Keterangan
  volume: z.string(),      // Volume (formatted number)
  unit: z.string()         // Satuan
});

export type DetailItem = z.infer<typeof detailItemSchema>;

// Detail section schema (represents each table within a card)
export const detailSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  items: z.array(detailItemSchema)
});

export type DetailSection = z.infer<typeof detailSectionSchema>;

// Detail card schema (represents a complete card with multiple sections)
export const detailCardSchema = z.object({
  id: z.string(),
  title: z.string(),
  sections: z.array(detailSectionSchema)
});

export type DetailCard = z.infer<typeof detailCardSchema>;

// Dashboard data schema
export const dashboardDataSchema = z.object({
  summaryCards: z.array(summaryCardSchema),
  detailCards: z.array(detailCardSchema)
});

export type DashboardData = z.infer<typeof dashboardDataSchema>;

// Input schemas (for future extensibility)
export const getSummaryCardsInputSchema = z.object({}).optional();
export type GetSummaryCardsInput = z.infer<typeof getSummaryCardsInputSchema>;

export const getDetailCardsInputSchema = z.object({}).optional();
export type GetDetailCardsInput = z.infer<typeof getDetailCardsInputSchema>;

export const getDashboardDataInputSchema = z.object({}).optional();
export type GetDashboardDataInput = z.infer<typeof getDashboardDataInputSchema>;