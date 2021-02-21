import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './views/Home'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <BrowserRouter>
    <div>
    <Header/>
    <Route path="/" exact component={Home}/>
    <div className="App">
      <h1>Hello, Letia Oktridiana</h1>
    </div>
    </div>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
