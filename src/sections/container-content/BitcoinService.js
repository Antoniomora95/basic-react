export const getBitcoinInfo = async () => {
    try {
        const bitcoinResponse = await fetch('https://api.coindesk.com/v1/bpi/currentprice/MXN.json');
        const json = await bitcoinResponse.json();
        const bitcoinPriceList = cleanResponse(json);
        return {
            hasError: false,
            bitcoinPriceList
        }
    } catch (error) {
        return {
            hasError: true,
            errorDescription: stringifyError(error)
        }
    }
}
const stringifyError = error => {
    if(error instanceof Error) {
        return error.toString();
    } else {
        return JSON.stringify(error);
    }
}

const cleanResponse = (data) => {
    const { bpi } = data;
    let currenciesList = [];
    for (const key in bpi) {
        currenciesList = [...currenciesList, bpi[key]]
    }
    return currenciesList;
}