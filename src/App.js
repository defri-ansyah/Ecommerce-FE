import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './views/Home'

function App() {
  return (
    <BrowserRouter>
    <div>
    <Route path="/" exact component={Home}/>
    <div className="App">
      <h1>Hello, Letia Oktridiana</h1>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
