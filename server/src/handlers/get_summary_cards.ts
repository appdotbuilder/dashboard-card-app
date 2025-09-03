import { type SummaryCard } from '../schema';

export const getSummaryCards = async (): Promise<SummaryCard[]> => {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching all summary cards from the database.
    // For now, returning template data as specified in the requirements.
    
    return Promise.resolve([
        {
            id: 'waste',
            label: 'Waste',
            value: '18.940',
            unit: 'BCM',
            iconPath: '/icons/waste.png'
        },
        {
            id: 'blended',
            label: 'Blended',
            value: '600',
            unit: 'BCM',
            iconPath: '/icons/blended.png'
        },
        {
            id: 'rain',
            label: 'Rain',
            value: '2',
            unit: 'Hours',
            iconPath: '/icons/rain.png'
        },
        {
            id: 'slippery',
            label: 'Slippery',
            value: '1',
            unit: 'Hours',
            iconPath: '/icons/slippery.png'
        },
        {
            id: 'coal_getting',
            label: 'Coal Getting',
            value: '6.922',
            unit: 'Ton',
            iconPath: '/icons/coal_getting.png'
        },
        {
            id: 'coal_hauling_uncrushed',
            label: 'Coal Hauling Uncrushed',
            value: '15.000',
            unit: 'Ton',
            iconPath: '/icons/coal_hauling_uncrushed.png'
        },
        {
            id: 'coal_hauling_crushed',
            label: 'Coal Hauling Crushed',
            value: '5.000',
            unit: 'Ton',
            iconPath: '/icons/coal_hauling_crushed.png'
        },
        {
            id: 'inventory',
            label: 'Inventory',
            value: '15.000',
            unit: 'Ton',
            iconPath: '/icons/inventory.png'
        }
    ]);
};