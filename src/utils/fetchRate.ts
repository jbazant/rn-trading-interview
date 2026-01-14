const RATE_URL = 'https://api.coinbase.com/v2/prices/{asset}-USD/buy';

const NETWORK_ERROR_RATE = 0; // chance to simulate a network error
const NETWORK_DELAY = 1e3; // delay to simulate network latency

const getRateUrl = (asset: string) => {
    return RATE_URL.replace('{asset}', asset);
};

export const simulateBadNetwork = (networkDelay: number, errorRate: number) =>
    new Promise((resolve, reject) =>
        setTimeout(() => {
            if (Math.random() < errorRate) {
                return reject(new Error(`Network error while fetching rate`));
            }
            resolve(null);
        }, networkDelay),
    );

export const fetchRate = async (asset: string): Promise<string> => {
    await simulateBadNetwork(NETWORK_DELAY, NETWORK_ERROR_RATE);
    const response = await fetch(getRateUrl(asset));
    const data = await response.json();
    return data.data.amount;
};
