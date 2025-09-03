import { type DetailCard } from '../schema';

export const getDetailCards = async (): Promise<DetailCard[]> => {
    // This is a placeholder declaration! Real code should be implemented here.
    // The goal of this handler is fetching all detail cards from the database.
    // For now, returning template data as specified in the requirements.
    
    return Promise.resolve([
        {
            id: 'east_enim',
            title: 'East Enim',
            sections: [
                {
                    id: 'coal_getting_east_enim_pit1',
                    title: 'Coal Getting - East Enim (PIT 1)',
                    items: [
                        { description: 'Waste', volume: '18.940', unit: 'BCM' },
                        { description: 'Blended', volume: '10', unit: 'BCM' },
                        { description: 'Coal Getting', volume: '6.922', unit: 'Ton' },
                        { description: 'Rain', volume: '2', unit: 'Hours' },
                        { description: 'Slippery', volume: '1', unit: 'Hours' }
                    ]
                },
                {
                    id: 'coal_getting_east_enim_pit2',
                    title: 'Coal Getting - East Enim (PIT 2)',
                    items: [
                        { description: 'Waste', volume: '18.940', unit: 'BCM' },
                        { description: 'Blended', volume: '10', unit: 'BCM' },
                        { description: 'Coal Getting', volume: '6.922', unit: 'Ton' },
                        { description: 'Rain', volume: '2', unit: 'Hours' },
                        { description: 'Slippery', volume: '1', unit: 'Hours' }
                    ]
                },
                {
                    id: 'inventory_stockpile_east_enim',
                    title: 'Inventory Stockpile - East Enim',
                    items: [
                        { description: 'ROM', volume: '10.000', unit: 'Ton' },
                        { description: 'PILE', volume: '5.000', unit: 'Ton' }
                    ]
                },
                {
                    id: 'coal_hauling_east_enim',
                    title: 'Coal Hauling - East Enim',
                    items: [
                        { description: 'Uncrushed', volume: '10.000', unit: 'Ton' },
                        { description: 'Crushed', volume: '3.000', unit: 'Ton' }
                    ]
                }
            ]
        },
        {
            id: 'west_enim',
            title: 'West Enim',
            sections: [
                {
                    id: 'coal_getting_west_enim_pit3',
                    title: 'Coal Getting West Enim (PIT 3)',
                    items: [
                        { description: 'Waste', volume: '18.940', unit: 'BCM' },
                        { description: 'Blended', volume: '10', unit: 'BCM' },
                        { description: 'Coal Getting', volume: '6.922', unit: 'Ton' },
                        { description: 'Rain', volume: '2', unit: 'Hours' },
                        { description: 'Slippery', volume: '1', unit: 'Hours' }
                    ]
                },
                {
                    id: 'inventory_stockpile_west_enim',
                    title: 'Inventory Stockpile - West Enim',
                    items: [
                        { description: 'ROM', volume: '10.000', unit: 'Ton' },
                        { description: 'PILE', volume: '5.000', unit: 'Ton' }
                    ]
                },
                {
                    id: 'coal_hauling_west_enim',
                    title: 'Coal Hauling - West Enim',
                    items: [
                        { description: 'Uncrushed', volume: '10.000', unit: 'Ton' },
                        { description: 'Crushed', volume: '3.000', unit: 'Ton' }
                    ]
                }
            ]
        },
        {
            id: 'inventory',
            title: 'Inventory',
            sections: [
                {
                    id: 'inventory_stockpile',
                    title: 'Inventory Stockpile',
                    items: [
                        { description: 'ROM', volume: '10.000', unit: 'Ton' },
                        { description: 'PILE', volume: '5.000', unit: 'Ton' }
                    ]
                },
                {
                    id: 'inventory_intermediate_stockpile',
                    title: 'Inventory Intermediate Stockpile',
                    items: [
                        { description: 'MLI', volume: '5.000', unit: 'Ton' },
                        { description: 'KM 0 SDJ', volume: '4.000', unit: 'Ton' },
                        { description: 'KM 36 SDJ', volume: '3.000', unit: 'Ton' },
                        { description: 'KM 107', volume: '2.000', unit: 'Ton' }
                    ]
                }
            ]
        }
    ]);
};