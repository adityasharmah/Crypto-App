import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '75f3cf583bmsh504028fe5d0e3acp10aef5jsn865a88118aee'
}

const baseUrl = "coinranking1.p.rapidapi.com";

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery : 'fetchBaseQuery'({baseUrl}),
  endpoints: (builder) => ({
    getCrytos : builder.query({
      query : (count) => createRequest(`/coins?limit="${count}`),
    }),
    getCryptoDetails : builder.query({
      query : (coinId) => createRequest(`/coins/${coinId}`),
    })
  })
});

export const {
  useGetCryptosQuery, 
} = cryptoApi;

// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/stats',
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '75f3cf583bmsh504028fe5d0e3acp10aef5jsn865a88118aee'
//   }
// };