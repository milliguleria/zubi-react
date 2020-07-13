import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './containers/Home/Home'
import Navbarmilli from './components/Navbarmilli'
// import Example from './components/Example'


const App = () => {
  return (
    <div>
      <Navbarmilli/>
      <Home />
    </div>
  )
}

export default App;
 