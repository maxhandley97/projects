// import React, {useEffect, useState} from 'react'

// // controlled element as it's value is controlled by the state
// // two way binding, element and state are bidirectional
// const CurrencySelector = ({setCurrency}) => {
//     const [selectValue, setSelectValue] = useState("AUD")

//     //setCurrency comes as a prop, whenever select 
//     useEffect(() => setCurrency(selectValue), [selectValue])

//   return (
//     <select onChange={event => setSelectValue(event.target.value)} value={selectValue}>
//         <option value="AUD">Australian Dollar</option>
//         <option value="USD">US Dollar</option>
//         <option value="EUR">Euro</option>
//     </select>
//   )
// }

// export default CurrencySelector

// const select = document.querySelector('#currency-selector')
// select.value


// // this method uses two props

import React, {useEffect, useState} from 'react'

// controlled element as it's value is controlled by the state
// two way binding, element and state are bidirectional
const CurrencySelector = ({currency, setCurrency}) => {
    // const [selectValue, setSelectValue] = useState("AUD")

    // seperate state for listing currencies 
    const [currencies, setCurrencies] = useState([])
    // //setCurrency comes as a prop, whenever select 
    // useEffect(() => setCurrency(selectValue), [selectValue])

    useEffect(() => {
      fetch('https://api.coindesk.com/v1/bpi/supported-currencies.json')
        .then(res => res.json())
        .then(data => setCurrencies(data))
    }, [])

  return (
    <select onChange={event => setCurrency(event.target.value)} value={currency}>
        {currencies.map(cur => <option key = {cur.currency} value={cur.currency}>{cur.country}</option>)}
    </select>
  )
}

export default CurrencySelector
