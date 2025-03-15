import useAnimation from './useAnimation'
import { Container, ContainerNumber, Number, Text } from './style'

function Showcases() {
    useAnimation()

    return (
        <Container id="showcases">
            <ContainerNumber className="number">
                <Number>+<span className="value">0</span></Number>
                <Text>parceiros pelo Brasil</Text>
            </ContainerNumber>
        </Container>
    )
}

export default Showcases