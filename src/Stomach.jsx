import React, {useContext} from 'react'
import { nameContext } from './App'
import './Stomach.css'
const Stomach =() => {
   let dog = useContext(nameContext)
    return (
        <div className ="stomach-container">
            <h1>Stomach : {dog} </h1>
        </div>
    )
}
export default Stomach
