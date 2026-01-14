import { useContext } from 'react';
import { RatesContext } from '../components/RatesContext';

export const useAssetRate = (asset: string): string | undefined => {
    const rates = useContext(RatesContext);

    const assetInfo = rates.find(r => r.asset === asset);

    if (assetInfo) {
        return assetInfo.rate;
    }

    return undefined;
};
