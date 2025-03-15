import { Container, Photo, Texts, Title, Subtitle, Text } from './style'
import aboutSRC from '../../public/img/About.png'

function About() {
    return (
        <Container id="about">
            <Photo src={aboutSRC} alt="Foto Sobre" placeholder="blur"/>
            <Texts>
                <Title>SOBRE NÓS</Title>
                <Subtitle>Facilite a vida dos seus colaboradores.</Subtitle>
                <Text>
                    Imagine poder oferecer aos seus colaboradores não apenas um benefício, mas uma verdadeira ferramenta de motivação e economia. Sabemos que equipes satisfeitas são o coração de um negócio de sucesso. É por isso que criamos uma solução que não só beneficia seus funcionários, mas também fortalece o compromisso de sua empresa com o bem-estar deles.
                    <br/>
                    <br/>
                    Com a Flix Benefícios, cada colaborador ganha um cartão exclusivo que abre portas para diversos parceiros credenciados por todo o Brasil. Estamos falando de descontos incríveis em farmácias, supermercados, postos de combustível, óticas e muito mais! Transforme cada compra em uma oportunidade de até 30% de economia, maximizando o poder de compra da sua equipe como nunca antes.
                </Text>
            </Texts>
        </Container>
    )
}

export default About