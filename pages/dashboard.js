import Head from 'next/head';

import { useContext } from 'react';
import { ShowCartContext } from '../contexts/ShowCartContext';

import Cart from '../components/Cart';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';

export default function Dashboard() {
  const { showCart } = useContext(ShowCartContext);
  return (
    <>
        <Head>
          <title>Burguer Kenzie</title>
        </Head>
        
        <Header/>
        <ProductsList />
        {showCart && <Cart/>}
    </>
  )
}