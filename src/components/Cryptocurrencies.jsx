import React, { useState }from 'react'
import millify from 'millify';
import { Link } from 'react-router-dom';
import {Card,Row, Col, Input} from  'antd';

import {useGetCryptoQuery} from '../services/cryptoApi';


const Cryptocurrencies = () => {
  const{ data: cryptoList, isFetching, } = useGetCryptoQuery();
  const { Cryptos, setCryptos } = useState(cryptoList?.data?.coins);

  console.log(cryptos);
  return (
    <div>
      Cryptocurrencies
    </div>
  )
}

export default Cryptocurrencies
