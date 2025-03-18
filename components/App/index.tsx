import { Container, Content, Photo, Texts, Title, Text } from './style'
import appSRC from '../../public/img/App.png'
import ButtonApp from '../ButtonApp'

function App() {
    return (
        <Container id="app">
            <Content>
                <Photo src={appSRC} alt="Foto Sobre" placeholder="blur"/>
                <Texts>
                    <Title>Gestão na palma da mão! Descubra o app que simplifica sua vida</Title>
                    <Text>
                        Com segurança total, o usuário acessa todas as informações do cartão diretamente no smartphone, de maneira simples e intuitiva. Além disso, o app conta com geolocalização inteligente, permitindo encontrar lojistas credenciados por estado, cidade e bairro, garantindo praticidade no dia a dia. Simples, rápido e na palma da sua mão!
                    </Text>
                    <ButtonApp/>
                </Texts>
            </Content>
        </Container>
    )
}

export default App