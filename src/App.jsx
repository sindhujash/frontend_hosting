import { createContext, useState } from 'react';
import Stomach from './Stomach'
import Hen from './Hen';
export let nameContext = createContext();
function App() {
  const[visible,setvisible]=useState(false);
  return (
    <nameContext.Provider value = "water">
      <button onClick ={() => setvisible(!visible)}>{visible?"water":"empty"}</button>
    {visible && <Hen />}    
    </nameContext.Provider>
  )
}
export default App