import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.section`
    display: flex;
    padding: 3em 0;
    background-color: ${props => props.theme.backgroundTertiary};
`

export const Content = styled.div`
    display: flex;
    max-width: 80em;
    align-self: center;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

export const Photo = styled(Image)`
    width: 28em;
    height: auto;
    margin-left: 3em;
    align-self: center;
    border-radius: 20px;

    @media screen and (max-width: 900px) {
        order: 1;
        width: 80%;
        margin: auto;
        margin-top: 2em;
        max-width: 35em;
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
    margin-top: 1em;
    font-size: 2.2em;
    font-weight: bold;
    color: ${props => props.theme.secondary};
`

export const Text = styled.span`
    font-size: 1.5em;
    margin-top: 1.5em;
    color: ${props => props.theme.colorSecondary};
`