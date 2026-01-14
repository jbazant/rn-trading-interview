import { RatesContext } from './RatesContext';
import { useFetchRates } from '../hooks/useFetchRates';

export type RatesProviderProps = {
    children: React.ReactNode;
};

export const RatesProvider = ({ children }: RatesProviderProps) => {
    const { rates } = useFetchRates();

    return <RatesContext.Provider value={rates}>{children}</RatesContext.Provider>;
};
