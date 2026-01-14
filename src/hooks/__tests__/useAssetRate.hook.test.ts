import { useAssetRate } from '../useAssetRate';
import { renderHook } from '@testing-library/react-native';
import { RatesProviderForTests } from '../../__mocks__/RatesProviderForTests';

describe('useAssetRate', () => {
    it('should return undefined for unknown asset', () => {
        const { result } = renderHook(() => useAssetRate('UNKNOWN_ASSET'), {
            wrapper: RatesProviderForTests,
        });
        expect(result.current).toBeUndefined();
    });

    it('should return correct rate for known fetched asset', () => {
        const { result } = renderHook(() => useAssetRate('BTC'), {
            wrapper: RatesProviderForTests,
        });
        expect(result.current).toBe('90000');
    });
});
