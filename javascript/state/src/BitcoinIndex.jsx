import React, { useEffect, useState } from 'react'

const BitcoinIndex = () => {
    let [price, setPrice] = useState('')
    // with an empty array, will only happen on mount

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/AUD.json')
        .then(res => res.json())    
        .then(data => setPrice(data.bpi.AUD.rate))
        // the array decides whether it will be called again after inital mount. 
    }, [])

  return <p>Current Price (AUD): {price}</p>
}

export default BitcoinIndex