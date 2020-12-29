export const RenderError = ({ errorDescription }) => <div className='FetchApiContainer RenderError'> { errorDescription } </div>

export const ListCurrencies = ({bitcoinPriceList})  => {
   return  bitcoinPriceList.map(_currency => {
        const { rate, description } = _currency;
        return <div className='FetchApiContainer RenderCurrencies'  key={description}>1 bitcoin is: {rate} {description}</div>
    })
}