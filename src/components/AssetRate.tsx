import { StyleSheet, Text, View } from 'react-native';
import { useAssetRate } from '../hooks/useAssetRate';

export type AssetRateProps = {
    asset: string;
};

export const AssetRate = ({ asset }: AssetRateProps) => {
    const rate = useAssetRate(asset);

    return (
        <View style={styles.container}>
            <Text style={styles.assetText}>{asset}</Text>
            <Text style={styles.rateText}>
                {rate !== undefined ? `${rate} USD` : 'Not fetched yet'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
    },
    assetText: {
        fontWeight: 'bold',
        color: '#171717',
    },
    rateText: {
        color: '#171717',
    },
});
