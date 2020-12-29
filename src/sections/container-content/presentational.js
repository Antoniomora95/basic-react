export const RenderError = ({ errorDescription }) => <div className='FetchApiContainer RenderError'> { errorDescription } </div>

const CurrencyItem = ({rate, description})=> {
    return <div className='FetchApiContainer RenderCurrencies'>1 bitcoin is: {rate} {description}</div>
}
export const ListCurrencies = ({bitcoinPriceList})  => {
   return  bitcoinPriceList.map(_currency => {
        const { rate, description } = _currency;
        return <CurrencyItem rate = {rate} description = {description} key={description}/>
    })
}