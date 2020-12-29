import React, { useState, useEffect } from 'react';
import './FetchAPI.css';
import { getBitcoinInfo } from './BitcoinService';
import { RenderError, ListCurrencies } from  './presentational'

export default function FetchAPIContainer() {
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
    

