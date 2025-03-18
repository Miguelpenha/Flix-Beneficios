import styled from 'styled-components'
import ImageNext from 'next/image'

export const Container = styled.section`
    display: flex;
    padding-top: 6em;
    padding-left: 8em;
    flex-direction: row;
    background-color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        padding: 2em;
        padding-top: 6em;
        align-items: center;
        flex-direction: column;
    }
`

export const Texts = styled.div`
    display: flex;
    max-width: 50%;

    @media screen and (max-width: 900px) {
        max-width: 30em;
        text-align: center;
    }
`

export const Title = styled.h1`
    margin-top: 2em;
    font-size: 3.2em;
    font-weight: bold;
`

export const Subtitle = styled.h3`
    margin-top: 2em;
    font-size: 1.1em;
    font-weight: 400;
`

export const Image = styled(ImageNext)`
    width: 32em;
    height: 100%;
    margin-left: auto;
    align-self: flex-end;

    @media screen and (max-width: 900px) {
        width: 100%;
        align-self: center;
    }
`