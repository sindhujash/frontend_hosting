import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import Form from './Form.jsx'
import Sindhuja from './Sindhuja.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Form/> */}
    <Sindhuja />
  </StrictMode>,
)
