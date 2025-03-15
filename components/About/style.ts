import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.section`
    display: flex;
    padding: 3em 0;
    flex-direction: row;
    border-radius: 20px;
    background-color: ${props => props.theme.backgroundSecondary};

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

export const Photo = styled(Image)`
    width: 28em;
    height: auto;
    margin-left: 3em;
    align-self: center;

    @media screen and (max-width: 900px) {
        order: 1;
        width: 80%;
        margin: auto;
        margin-top: 2em;
    }
`

export const Texts = styled.div`
    width: 45%;
    display: flex;
    margin-right: 3em;
    margin-left: auto;

    @media screen and (max-width: 900px) {
        width: 85%;
        margin: auto;
    }
`

export const Title = styled.h3`
    font-size: 0.9em;
    color: ${props => props.theme.primary};
`

export const Subtitle = styled.span`
    margin-top: 1em;
    font-size: 1.6em;
    font-weight: bold;
    color: ${props => props.theme.secondary};
`

export const Text = styled.span`
    font-size: 1em;
    margin-top: 1.5em;
    color: ${props => props.theme.colorSecondary};
`