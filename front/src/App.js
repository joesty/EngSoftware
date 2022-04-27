import React from 'react'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Login from '../src/pages/Login'
import Esqueceu_a_senha from './pages/Esqueceu_a_Senha'
import Routes from './Routes'


function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
