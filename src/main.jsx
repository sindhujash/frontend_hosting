import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
//import Form from './Form.jsx'
// import Sindhuja from './Sindhuja.jsx'
//import Appparam from './Appparams'

import Apps from './Apps.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <Form/>  
    <Sindhuja />
    <Appparam /> */}
    <Apps />
  </StrictMode>,
)
