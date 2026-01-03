import { TimerIcon } from 'lucide-react';
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import './styles/global.css';
import './styles/theme.css'
import { HeadingComponent } from './components/Heading';
export function App() {
    return (
        <>
            <Container>
                <Logo>
                    <TimerIcon size={56}/>
                    <HeadingComponent>Chronos</HeadingComponent>
                </Logo>
            </Container>
            <Container>
                <section>MENU</section>
            </Container>
            <Container>
                <section>BODY</section>
            </Container>
            <Container>
                <section>FOOTER</section>
            </Container>
        </>
    );
    
}

