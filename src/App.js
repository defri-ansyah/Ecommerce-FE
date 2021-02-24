import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Home'
import ProductDetail from './views/ProductDetail'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Route path="/" exact component={Home}/>
      <Route path="/product-detail" exact component={ProductDetail}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
