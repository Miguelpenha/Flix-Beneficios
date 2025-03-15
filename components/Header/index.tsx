import logoFlixSRC from '../../public/img/asd.png'

import { Container, Logo } from './style'

function Header() {
    return (
        <Container>
            <Logo src={logoFlixSRC} alt="Logo Flix Benefícios"/>
        </Container>
    )
}

export default Header