import './FetchAPI.css';
import React, { useState, useEffect } from 'react';

const getBitcoinInfo = async () => {
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

const stringifyError = error => {
    if(error instanceof Error) {
        return error.toString();
    } else {
        return JSON.stringify(error);
    }
}

const RenderError = ({errorDescription}) => <div className='FetchApiContainer RenderError'> { stringifyError(errorDescription) } </div>

const ListCurrencies = ({bitcoinPriceList})  => {
   return  bitcoinPriceList.map(_currency => {
        const { rate, description } = _currency;
        return <div className='FetchApiContainer RenderCurrencies'  key={description}>1 bitcoin is: {rate} {description}</div>
    })
}

export default function FetchAPI(props) {
    const [state, setStateComponent] = useState({ bitcoinPriceList: [], hasError: false, errorDescription: 'nothing'});

    useEffect(() => {
        let shouldUpdate = true;
        getBitcoinInfo().then(data => {
            if (data.hasError && shouldUpdate) {
                const { hasError, errorDescription } = data;
                setStateComponent({hasError, errorDescription });
            } else if( !data.hasError &&  shouldUpdate) {
                const { bitcoinPriceList } = data;
                setStateComponent({ bitcoinPriceList })
            }
        });
        return function clean(){
            return shouldUpdate = false;
        }
    }, [])
    const { bitcoinPriceList, hasError, errorDescription } = state;
    return (
        <div>
            <h4>Fetch API example </h4>
             { hasError && <RenderError errorDescription = { errorDescription } /> }
             { !hasError && <ListCurrencies bitcoinPriceList = { bitcoinPriceList }/> }
        </div>
    );
}
    

