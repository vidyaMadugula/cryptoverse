import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'a509383ffemshbaf4fcb8d099232p114cb9jsn6abd751f5e8a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}
const baseUrl='https://coinranking1.p.rapidapi.com';
const createRequest=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        GetCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`),
        }),
        GetCryptoDetails:builder.query({
            query:(coinId)=>createRequest(`/coin/${coinId}`),
        }),
        GetCryptoHistory:builder.query({
            query:(coinId,timePeriod)=>createRequest(`/coin/${coinId}/$history/${timePeriod}`),
        }),
        GetExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    }),

});
export const {useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery, useGetExchangesQuery}=cryptoApi;

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': 'a509383ffemshbaf4fcb8d099232p114cb9jsn6abd751f5e8a',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };


// get Exchanges
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/exchange/-zdvbieRdZ/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     limit: '50',
//     offset: '0',
//     orderBy: '24hVolume',
//     orderDirection: 'desc'
//   },
//   headers: {
//     'X-RapidAPI-Key': '6080d94879mshc475d8a3055d78ap159a61jsncfde0ee9cf5b',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }