import { useEffect, useState } from 'react';
import { fetchRate } from '../utils/fetchRate';
import { AssetInfo } from '../types';

const ASSETS = ['BTC', 'ETH', 'SOL'];

export const useFetchRates = () => {
    const [isFetching, setFetching] = useState(false);
    const [rates, setRates] = useState<AssetInfo[]>(
        ASSETS.map(asset => ({ asset, rate: undefined })),
    );

    useEffect(() => {
        const fetchRates = async () => {
            setFetching(true);
            try {
                const fetchedRates = await Promise.all(
                    ASSETS.map(async asset => {
                        const rate = await fetchRate(asset);
                        return { asset, rate };
                    }),
                );

                setRates(fetchedRates);
            } catch (error) {
                console.error('Error fetching rates:', error);
            } finally {
                setFetching(false);
            }
        };

        fetchRates();
    }, []);

    return {
        rates,
        isFetching,
    };
};
