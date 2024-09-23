import {useState} from 'react';
import './App.css';

function App() {
    // useState-Hook initialisiert count mit 0
    const [count, setCount] = useState<number>(0);

    function increaseCount() {
        // count um 1 erhöhen
        setCount(count + 1);
        console.log(count + 1); // Zeigt den neuen Wert an, da setCount asynchron ist
    }

    function ifComp(){
        if(count % 2 === 0) {
            return <h2>Even</h2>
        } else {
            return <h2>Odd</h2>
        }
    }

    return (
        <>
            <h1>{count}</h1>
            {count % 2 === 0 ? <h2>Even</h2> : <h2>Odd</h2>}
            {count % 2 === 0 && <h2>Even</h2>}
            {ifComp()}
            <button onClick={increaseCount}>Click me!</button>
        </>
    );
}

export default App;
