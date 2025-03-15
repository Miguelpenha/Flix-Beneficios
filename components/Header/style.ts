import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.header`
    z-index: 2;
    width: 100%;
    display: flex;
    position: fixed;
    padding: 2em 8em;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        justify-content: center;
    }
`

export const Logo = styled(Image)`
    width: 10em;
    height: auto;
`