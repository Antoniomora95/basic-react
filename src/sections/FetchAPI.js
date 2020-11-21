import React, { useState, useEffect } from 'react';

const getBitcoinInfo = async () => {
    try {
        const bitcoinResponse = await fetch('https://api.coindesk.com/v1/bpi/currentprice/MXN.json');
        const json = await bitcoinResponse.json();
        return json;
    } catch (error) {
        return {
            hasError: true,
            errorDescription: error
        }
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
export default function FetchAPI(props) {
    const [state, setStateComponent] = useState({ bitcoinPriceList: [], hasError: false, errorDescription: '', loading: false });

    useEffect(() => {
        setStateComponent({ loading: true });
        getBitcoinInfo().then(data => {
            if (data.hasError) {
                const { hasError, errorDescription } = data;
                setStateComponent({ loading: false, hasError, errorDescription });
            } else {
                setStateComponent({ bitcoinPriceList: cleanResponse(data) })
            }
        });
    }, [])
    console.log(state, 'sr');
    const { bitcoinPriceList } = state
    return (
        <div>
            <h4>Fetch API example</h4>
            { bitcoinPriceList && bitcoinPriceList.length &&
                bitcoinPriceList.map(_currency => {
                    const { rate, description } = _currency;
                    return <div key={description}>1 bitcoin is: {rate} {description}</div>
                })
            }
        </div>
    );
}

