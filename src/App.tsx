import { useState } from "react";
import './styles/global.css';
import './styles/theme.css'
import {HeadingComponent} from './components/Heading.tsx'
export function App() {
    return (
        <>
            <HeadingComponent> Texto personalizado</HeadingComponent>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam error, sint provident accusantium aperiam quia quidem impedit fugit molestias cum adipisci consectetur laudantium eligendi sapiente, magni laborum, minima numquam suscipit!</p>
            <Counter />
        </>
    );
    
}

function Counter() {
    const [number, setNumber] = useState(0);
    
    return (
        <>
            <p>Contador: {number}</p>
            <button onClick={() => setNumber((number) => number + 1)}> Aumentar em 1</button>
            <button onClick={() => setNumber(0)}>Resetar</button>
        </>
    );
}

