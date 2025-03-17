import { Container, Content, Photo, Texts, Title, Description, Form, Input, Button } from './style'
import contactSRC from '../../public/img/Contact.png'

function Contact() {
    return (
        <Container id="about">
            <Content>
                <Texts>
                    <Title>Vamos transformar a gestão de benefícios da sua empresa?</Title>
                    <Description>Preencha o formulário e fale conosco</Description>
                    <Form action="" method="POST">
                        <Input required type="text" id="name" name="name" placeholder="Nome"/>
                        <Input required type="tel" id="tel" name="tel" placeholder="Telefone"/>
                        <Input required type="email" id="email" name="email" placeholder="E-mail corporativo"/>
                        <Input required type="text" id="company" name="company" placeholder="Nome da empresa"/>
                        <Input required type="text" id="cnpj" name="cnpj" placeholder="Seu CNPJ"/>
                        <Button type="submit">QUERO CONHECER A FLIX</Button>
                    </Form>
                </Texts>
                <Photo src={contactSRC} alt="Foto Sobre" placeholder="blur"/>
            </Content>
        </Container>
    )
}

export default Contact