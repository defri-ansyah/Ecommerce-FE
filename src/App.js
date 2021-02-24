import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './views/Home'
import ProductDetail from './views/ProductDetail'
import Header from './components/Header'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import store from './configs/redux/store.js'


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/product-detail" exact component={ProductDetail} />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
