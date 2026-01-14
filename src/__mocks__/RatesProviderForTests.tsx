import { RatesContext } from '../components/RatesContext';
import { mockRates } from './mockRates';

export type RatesProviderProps = {
    children: React.ReactNode;
};

export const RatesProviderForTests = ({ children }: RatesProviderProps) => {
    return <RatesContext.Provider value={mockRates}>{children}</RatesContext.Provider>;
};
