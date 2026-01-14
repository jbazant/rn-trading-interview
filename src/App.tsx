import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RatesProvider } from './components/RatesProvider';
import { AssetRate } from './components/AssetRate';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Rates watcher</Text>
            <RatesProvider>
                <View style={styles.rates}>
                    <AssetRate asset="BTC" />
                    <AssetRate asset="ETH" />
                    <AssetRate asset="SOL" />
                </View>
                <StatusBar style="auto" />
            </RatesProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2586A5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 12,
    },
    rates: {
        borderTopWidth: 1,
        borderTopColor: '#555',
        borderStyle: 'solid',
        paddingTop: 20,
        marginTop: 12,
        width: '80%',
    },
});
