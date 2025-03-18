import { Container, Logo, Menu, OptionContainer, Option, OptionIcon } from './style'
import logoFlixSRC from '../../public/img/Logo Flix Benefícios.png'

function Header() {
    return (
        <Container>
            <Logo src={logoFlixSRC} alt="Logo Flix Benefícios" priority/>
            <Menu>
                <OptionContainer>
                    <Option href="#sistema">
                        <OptionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                        </OptionIcon>
                        Sistema
                    </Option>
                </OptionContainer>
                <OptionContainer>
                    <Option href="#webmail">
                        <OptionIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </OptionIcon>
                        WebMail
                    </Option>
                </OptionContainer>
            </Menu>
        </Container>
    )
}

export default Header