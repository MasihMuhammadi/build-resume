import { useState } from 'react'
import createRoot from 'react-dom'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './home';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { fontAwesome } from 'fontawesome';
function App () {
  
 const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<BrowserRouter><Home /></BrowserRouter>)
}

export default App;
