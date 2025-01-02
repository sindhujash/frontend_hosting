import {useState, useEffect} from "react";
function Usestate(){
    let [count, setCount] = useState(0);
    let [name, setName] = useState("sindhu");

    useEffect(()=>{
        console.log("value updated");
    },[count]);
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>
            <h1>name: {name}</h1>
            <textarea onChange={(e) => setName(e.target.value)}></textarea>
        </div>
    )
}
export default Usestate
