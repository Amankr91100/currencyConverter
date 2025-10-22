
import { useEffect, useState } from "react";


  function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {                                // exchangeRate-API
        fetch(`https://v6.exchangerate-api.com/v6/0214f774908f5add5e2cb2cf/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
  }
export default useCurrencyInfo;











// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;



// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api/latest/currencies/${currency}.json`
//         );
//         if (!res.ok) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         const json = await res.json();
//         setData(json[currency]);
//       } catch (err) {
//         console.error("Failed to fetch currency data:", err);
//       }
//     };

//     fetchData();
//   }, [currency]);

//   return data;
// }