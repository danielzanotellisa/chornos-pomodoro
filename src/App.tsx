import { Container } from './components/Container';
import { Logo } from './components/Logo';
import './styles/global.css';
import './styles/theme.css'

export function App() {
    return (
        <>
            <Container>
                <Logo/>
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

