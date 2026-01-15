import { ReactNode } from 'react';

import { RatesContext } from './RatesContext';
import { useFetchRates } from '../hooks/useFetchRates';

export type RatesProviderProps = {
    children: ReactNode;
};

export const RatesProvider = ({ children }: RatesProviderProps) => {
    const { rates } = useFetchRates();

    return <RatesContext.Provider value={rates}>{children}</RatesContext.Provider>;
};
