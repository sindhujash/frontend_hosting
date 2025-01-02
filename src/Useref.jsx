import {useState, useRef} from "react";
function Useref() {
    let [count, setCount] = useState(0);
    let [name, setName] = useState("sindhu");
    let countRef = useRef(0);
    let nameRef = useRef("sindhu");

    let increment = () =>{
        setCount(count+1);
        countRef.current++;
        console.log("Ref: ",countRef.current);
    }
    
    let change = (e) =>{
        setName(e.target.value);
        nameRef.current=e.target.value;
        console.log("change: ",name);
        console.log("Ref: ",nameRef.current);
    }
    return (
        <div>
            <h1>Count: {countRef.current}</h1>
            <button onClick={increment}>+++</button>
            <h1>name: {name}</h1>
            <textarea onChange={change}></textarea>
        </div>
    )   
}
export default Useref
