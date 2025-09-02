import {useEffect, useState} from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    
    useEffect(() => {
        // If no currency is provided, return empty object
        if (!currency) {
            setData({})
            return
        }
        
        // Fetch data from FX Rates API
        fetch(`https://api.fxratesapi.com/latest?base=${currency}&format=json`)
        .then((res) => res.json())
        .then((res) => {
            // Check if the response is successful
            if (res && res.rates) {
                setData(res.rates)
            } else {
                console.error('API Error:', res)
                setData({})
            }
        })
        .catch((error) => {
            console.error('Fetch Error:', error)
            setData({})
        })
    }, [currency])
    
    return data
}

export default useCurrencyInfo