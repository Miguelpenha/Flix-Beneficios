import { Container, Logo } from './style'
import logoFlixSRC from '../../public/img/Logo Flix Benefícios.png'

function Header() {
    return (
        <Container>
            <Logo src={logoFlixSRC} alt="Logo Flix Benefícios" priority/>
        </Container>
    )
}

export default Header