import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AnimeShop } from '../components/AnimeShop';
import { Car } from '../components/Car';
import { Checkout } from '../components/Checkout';
import { Contact } from '../components/Contact';
import { ProductFullScreen } from '../components/ProductFullScreen';
import { Shop } from '../components/Shop';
import { Footer } from '../footer/Footer';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { Navbar } from '../navbar/Navbar';

export const AppRouter = () => {

  const { data, loading } = useFetchProducts();

  if( loading ) {

    return <div>Cargando...</div>;

  };

  return (
    <BrowserRouter>

        <Navbar />

        <Routes>

            <Route path="/" element={ <AnimeShop /> } />

            <Route path="carrito" element={ <Car /> } />

            <Route path="checkout" element={ <Checkout /> } />

            <Route path="contacto" element={ <Contact /> } />

            <Route path="producto" element={ <ProductFullScreen /> } />

            <Route path="comprar" element={ <Shop /> } />

        </Routes>

        <Footer />

    </BrowserRouter>
  );
};
