const RATE_URL = 'https://api.coinbase.com/v2/prices/{asset}-USD/buy';

const getRateUrl = (asset: string) => {
    return RATE_URL.replace('{asset}', asset);
};

export const fetchRate = async (asset: string): Promise<string> => {
    const response = await fetch(getRateUrl(asset));
    const data = await response.json();
    return data.data.amount;
};
