import { fetchRate, simulateBadNetwork } from '../fetchRate';

describe('fetchRate', () => {
    let fetchMock: jest.SpyInstance;

    beforeEach(() => {
        fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
            json: async () => ({ data: { amount: '95956.01', base: 'BTC', currency: 'USD' } }),
            ok: true,
            status: 200,
        } as Response);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should fetch rate for given asset', async () => {
        const result = await fetchRate('BTC');

        expect(result).toBe('95956.01');
        expect(fetchMock).toHaveBeenCalledWith('https://api.coinbase.com/v2/prices/BTC-USD/buy');
    });

    describe('simulateBadNetwork', () => {
        it('should throw an error when network error is simulated', async () => {
            // Mock Math.random to always return a value that triggers the error
            jest.spyOn(Math, 'random').mockReturnValue(0.3); // 10% < 20% error rate

            await expect(() => simulateBadNetwork(0, 0.5)).rejects.toThrow(
                'Network error while fetching rate',
            );
            await expect(simulateBadNetwork(1, 0.1)).resolves.toBeNull();
        });
    });
});
