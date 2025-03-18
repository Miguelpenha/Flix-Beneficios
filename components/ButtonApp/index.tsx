import useSystem from './useSystem'
import { Container, Icon, Text, OtherVersion } from './style'

function ButtonApp() {
    const system = useSystem()
    const androidURL = '#android'
    const IosURL = '#ios'

    if (system) {
        return (
            <>
                {system === 'Android' && (
                    <Container href={androidURL}>
                        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                        </Icon>
                        <Text>Baixe o app para Android agora</Text>
                    </Container>
                )}
                {system === 'IOS' && (
                    <Container href={IosURL}>
                        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                        </Icon>
                        <Text>Baixe o app para IOS agora</Text>
                    </Container>
                )}
                {system !== 'Other' && (
                    <OtherVersion href={system === 'Android' ? IosURL : androidURL}>Ou baixe a versão {system === 'Android' ? 'IOS' : 'Android'}</OtherVersion>
                )}
                {system === 'Other' && <>
                    <Container href={IosURL}>
                        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                        </Icon>
                        <Text>Baixe o app para IOS agora</Text>
                    </Container>
                    <Container $top href={androidURL}>
                        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                        </Icon>
                        <Text>Baixe o app para Android agora</Text>
                    </Container>
                </>}
            </>
        )
    } else {
        return null
    }
}

export default ButtonApp