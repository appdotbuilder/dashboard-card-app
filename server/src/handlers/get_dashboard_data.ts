import { type DashboardData } from '../schema';
import { getSummaryCards } from './get_summary_cards';
import { getDetailCards } from './get_detail_cards';

export const getDashboardData = async (): Promise<DashboardData> => {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching all dashboard data by combining summary and detail cards.
    // Currently using the individual handlers to get the template data.
    
    try {
        const [summaryCards, detailCards] = await Promise.all([
            getSummaryCards(),
            getDetailCards()
        ]);

        return {
            summaryCards,
            detailCards
        };
    } catch (error) {
        // In a real implementation, proper error handling would be implemented
        console.error('Error fetching dashboard data:', error);
        return {
            summaryCards: [],
            detailCards: []
        };
    }
};