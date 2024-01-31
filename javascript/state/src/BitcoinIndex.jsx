// import React, { useEffect, useState } from 'react'

// const BitcoinIndex = () => {
//     let [price, setPrice] = useState('')
//     // with an empty array, will only happen on mount

//     useEffect(() => {
//         fetch(`https://api.coindesk.com/v1/bpi/currentprice/AUD.json`)
//         .then(res => res.json())    
//         .then(data => setPrice(data.bpi.AUD.rate))
//         // the array decides whether it will be called again after inital mount. 
//     }, [])

//   return <p>Current Price (AUD): {price}</p>
// }

// export default BitcoinIndex




// import React, { useEffect, useState } from 'react'

// const BitcoinIndex = () => {
//     let [price, setPrice] = useState('')
//     let [currency, setCurrency] = useState('AUD')

//     // with an empty array, will only happen on mount
//     useEffect(() => {
//         fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}`)
//         .then(res => res.json())    
//         .then(data => setPrice(data.bpi[currency].rate))
//         // the array decides whether it will be called again after inital mount.
//         // currency is the dependency in this example 
//     }, [currency])

//   return <p>Current Price ({currency}): {price}</p>
// }

// export default BitcoinIndex


// import React, { useEffect, useState } from "react"
// import CurrencySelector from "./CurrencySelector"

// const BitcoinIndex = () => {
//     let [price, setPrice] = useState("")
//     let [currency, setCurrency] = useState("AUD")

//     useEffect(() => {
//         fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}`)
//             .then((res) => res.json())
//             .then((data) => setPrice(data.bpi[currency].rate))
//     }, [currency])

//     return (
//         <>
//             <CurrencySelector setCurrency={setCurrency} />
//             <p>
//                 Current Price ({currency}): {price}
//             </p>
//         </>
//     )
// }

// export default BitcoinIndex

import React, { useEffect, useState } from "react"
import CurrencySelector from "./CurrencySelector"

const BitcoinIndex = () => {
    let [price, setPrice] = useState("")
    let [currency, setCurrency] = useState("AUD")

    useEffect(() => {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
            .then((res) => res.json())
            .then((data) => setPrice(data.bpi[currency].rate))
    }, [currency])

    return (
      <>
          <CurrencySelector currency = {currency} setCurrency={setCurrency} />
          <p>
              Current Price ({currency}): {price}
          </p>
      </>
    )
}

export default BitcoinIndex