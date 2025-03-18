import useAnimation from './useAnimation'
import { Container, ContainerNumber, Number, Text } from './style'
import LogosSlides from './LogosSlides'
import images from './images'

function Showcases() {
    useAnimation()

    return (
        <Container id="showcases">
            <ContainerNumber className="number">
                <Number>+<span className="value">0</span></Number>
                <Text>parceiros pelo Brasil</Text>
            </ContainerNumber>
            <LogosSlides id="companies" images={images}/>
        </Container>
    )
}

export default Showcases