import { Container, Title, List } from './style'
import features from './features'
import Feature from './Feature'

function Features() {
    return (
        <Container id="features">
            <Title>Conheça nossas soluções</Title>
            <List>
                {features.map((feature, index) => (
                    <Feature feature={feature} key={index}/>
                ))}
            </List>
        </Container>
    )
}

export default Features