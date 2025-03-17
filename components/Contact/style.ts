import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.section`
    display: flex;
    padding: 3em 0;
    background-color: ${props => props.theme.color};
`

export const Content = styled.div`
    gap: 1em;
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
    margin-right: 3em;
    align-self: center;

    @media screen and (max-width: 900px) {
        order: 0;
        width: 80%;
        margin: auto;
        margin-top: 2em;
    }
`

export const Texts = styled.div`
    width: 45%;
    display: flex;
    margin-left: 3em;
    margin-right: auto;

    @media screen and (max-width: 900px) {
        width: 85%;
        margin: auto;
        max-width: 35em;
    }
`

export const Title = styled.h1`
    font-size: 2em;
    margin-top: 1em;
    font-weight: bold;
    color: ${props => props.theme.secondary};
`

export const Description = styled.span`
    font-size: 0.9em;
    margin-top: 1.5em;
    color: ${props => props.theme.colorSecondary};
`

export const Form = styled.form`
    gap: 1.5em;
    display: flex;
    margin-top: 1em;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    padding: 1em;
    font-size: 0.95em;
    border-radius: 15px;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.1);

    &:focus {
        outline: none;
        box-shadow: 0px 5px 10px 7px rgba(0, 0, 0, 0.2);
    }
`

export const Button = styled.button`
    gap: 1em;
    width: 20em;
    border: none;
    display: flex;
    padding: 1.2em;
    cursor: pointer;
    max-width: 20em;
    margin-top: 2em;
    font-weight: bold;
    border-radius: 10px;
    align-self: flex-start;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    box-shadow: 0px 2px 5px 5px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.theme.primary};

    &:hover {
        transform: scale(1.05);
        color: ${props => props.theme.primary};
        background-color: ${props => props.theme.color};
        box-shadow: 0px 5px 15px 15px rgba(0, 0, 0, 0.1);
    }

    @media screen and (max-width: 900px) {
        width: 95%;
        align-self: center;
    }
`