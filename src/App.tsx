import { useState } from "react";
import './styles/global.css';
import './styles/theme.css'
import {HeadingComponent} from './components/Heading.tsx'
import { TimerIcon } from "lucide-react";
export function App() {
    return (
        <>
            <HeadingComponent> 
                Texto personalizado
                <button>
                    <TimerIcon />
                </button>
            </HeadingComponent>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam error, sint provident accusantium aperiam quia quidem impedit fugit molestias cum adipisci consectetur laudantium eligendi sapiente, magni laborum, minima numquam suscipit!</p>
        </>
    );
    
}

