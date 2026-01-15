import { ReactNode } from 'react';

import { RatesContext } from '../components/RatesContext';
import { mockRates } from './mockRates';

export type RatesProviderProps = {
    children: ReactNode;
};

export const RatesProviderForTests = ({ children }: RatesProviderProps) => {
    return <RatesContext.Provider value={mockRates}>{children}</RatesContext.Provider>;
};
