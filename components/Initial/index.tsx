import { Container, Texts, Title, Subtitle, Image } from './style'
import initialSRC from '../../public/img/Initial.png'
import ButtonWhatsApp from '../ButtonWhatsApp'

function Initial() {
    return (
        <Container id="initial">
            <Texts>
                <Title>Sua empresa pensando no seu bem-estar</Title>
                <Subtitle>Oferecemos vantagens e benefícios aos seus funcionários, com a solidez e eficiência.</Subtitle>
                <ButtonWhatsApp color="secondary">QUERO PEDIR MEU CARTÃO FLIX</ButtonWhatsApp>
            </Texts>
            <Image priority src={initialSRC} alt="Foto Inicio"/>
        </Container>
    )
}

export default Initial