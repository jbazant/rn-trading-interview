import { renderHook, waitFor } from '@testing-library/react-native';
import { useFetchRates } from '../useFetchRates';

jest.mock('../../utils/fetchRate', () => ({
    fetchRate: jest.fn((asset: string) => {
        const rates: { [key: string]: string } = {
            BTC: '90000',
            ETH: '4000',
            SOL: '150',
        };

        return Promise.resolve(rates[asset]);
    }),
}));

describe('useFetchRates', () => {
    const renderUseFetchRates = () => renderHook(() => useFetchRates());

    it('should return empty rates on mount', () => {
        const { result } = renderUseFetchRates();

        expect(result.current.rates).toEqual([
            {
                asset: 'BTC',
                rate: undefined,
            },
            {
                asset: 'ETH',
                rate: undefined,
            },
            {
                asset: 'SOL',
                rate: undefined,
            },
        ]);
        expect(result.current.isFetching).toBe(true);
    });

    it('should display rates after fetching is completed', async () => {
        const { result } = renderUseFetchRates();

        await waitFor(() => {
            expect(result.current.isFetching).toBe(false);
        });

        expect(result.current.rates).toEqual([
            {
                asset: 'BTC',
                rate: '90000',
            },
            {
                asset: 'ETH',
                rate: '4000',
            },
            {
                asset: 'SOL',
                rate: '150',
            },
        ]);
    });
});
