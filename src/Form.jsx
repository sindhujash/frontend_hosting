function Form() {
    let name = "sindhu";
    return(
            <div>
                <h1>List task</h1>
                <ol type ="1">
                    <li>Fruits</li>
                    <ul>
                        <li>Apple</li>
                        <li>Orange</li>
                        <li>grapes</li>
                    </ul>
                    <li>Vege</li>
                    <ol type ="I">
                        <li>Carrot</li>
                        <li>Beans</li>
                        <li>Onion</li>
                    </ol>
                    <li>Birds</li>
                    <ul type ="square">
                        <li>Parrot</li>
                        <li>Crow</li>
                        <li>Hen</li>
                    </ul>
                </ol>
            </div>
    )
}


export default Form;

