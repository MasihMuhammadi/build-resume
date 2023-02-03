import { useState } from 'react'
import createRoot from 'react-dom'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import CustomResume from './customResume';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'

import Home from './home'
function App () {
  
 const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<div>
    <Home />
    
    </div>
     )
}

export default App;