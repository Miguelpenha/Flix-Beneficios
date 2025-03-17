import { Container, Content, Photo, Texts, Title, Text } from './style'
import cardSRC from '../../public/img/Card.png'
import ButtonWhatsApp from '../ButtonWhatsApp'

function Card() {
    return (
        <Container id="card">
            <Content>
                <Texts>
                    <Title>Zero Custos para sua empresa</Title>
                    <Text>
                        Implante o Cartão Benefício Flix sem pagar nada! A adesão é gratuita e não gera custos administrativos para sua empresa.
                        <br/>
                        <br/>
                        ✔ Sem taxa de adesão
                        <br/>
                        ✔ Sem encargos financeiros
                        <br/>
                        ✔ Fácil integração com a folha de pagamento
                    </Text>
                    <ButtonWhatsApp color="primary">QUERO PEDIR MEU CARTÃO FLIX</ButtonWhatsApp>
                </Texts>
                <Photo src={cardSRC} alt="Foto Cartão" placeholder="blur"/>
            </Content>
        </Container>
    )
}

export default Card