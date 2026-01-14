import { AssetRate } from '../AssetRate';
import { RatesProviderForTests } from '../../__mocks__/RatesProviderForTests';
import { render } from '@testing-library/react-native';

describe('AssetRate', () => {
    it('should render asset and its rate', () => {
        const asset = 'BTC';

        const { getByText } = render(<AssetRate asset={asset} />, {
            wrapper: RatesProviderForTests,
        });

        expect(getByText(asset)).toBeOnTheScreen();
        expect(getByText('90000 USD')).toBeOnTheScreen();
    });

    it('should render asset with undefined rate for unknown asset', () => {
        const asset = 'UNKNOWN_ASSET';

        const { getByText } = render(<AssetRate asset={asset} />, {
            wrapper: RatesProviderForTests,
        });

        expect(getByText(asset)).toBeOnTheScreen();
        expect(getByText('Not fetched yet')).toBeOnTheScreen();
    });
});
