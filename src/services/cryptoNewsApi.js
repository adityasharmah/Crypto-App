import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeader = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': '75f3cf583bmsh504028fe5d0e3acp10aef5jsn865a88118aee'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery : 'fetchBaseQuery'({baseUrl}),
  endpoints: (builder) => ({
    getCrytoNews : builder.query({
      query : ({newsCategory, count}) =>  createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
  })
});

export const { useGetCryptoNewsQuery } = cryptoApi;
