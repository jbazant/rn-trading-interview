import { fetchRate } from '../fetchRate';

describe('fetchRate', () => {
    let fetchMock: jest.SpyInstance;

    beforeAll(() => {
        fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
            json: async () => ({ data: { amount: '95956.01', base: 'BTC', currency: 'USD' } }),
            ok: true,
            status: 200,
        } as Response);
    });

    it('should fetch rate for given asset', async () => {
        const result = await fetchRate('BTC');

        expect(result).toBe('95956.01');
        expect(fetchMock).toHaveBeenCalledWith('https://api.coinbase.com/v2/prices/BTC-USD/buy');
    });
});
