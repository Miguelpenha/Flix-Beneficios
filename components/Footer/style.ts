import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.footer`
    display: flex;
    flex-wrap: wrap;
    padding: 3em 8em;
    flex-direction: row;
    align-items: center;
    background-color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        padding: 1em 2em;
    }
`

export const Company = styled.div`
    display: flex;
`

export const Logo = styled(Image)`
    width: 12em;
    height: auto;
`

export const Copyright = styled.span`
    margin-top: 2em;
    color: ${props => props.theme.color};
`

export const Contacts = styled.div`
    gap: 1em;
    display: flex;
    margin-left: 5em;

    @media screen and (max-width: 900px) {
        margin-left: 0;
        margin-top: 2em;
    }
`

export const Contact = styled.a`
    gap: 0.5em;
    display: flex;
    align-items: center;
    flex-direction: row;
    text-decoration: none;
    align-self: flex-start;
    color: ${props => props.theme.color};
`

export const ContactIcon = styled.svg`
    width: 1.5em;
    height: auto;
    fill: ${props => props.theme.color};
`

export const ContactText = styled.span`
    font-size: 1em;
    word-break: break-all;
    color: ${props => props.theme.color};
`

export const Social = styled.div`
    gap: 1em;
    display: flex;
    margin-left: auto;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        margin-left: 0;
        margin-top: 2em;
        margin-right: auto;
    }
`

export const SocialContainer = styled.a`
    width: 2em;
    height: auto;
    display: flex;
`

export const SocialIcon = styled.svg`
    width: 100%;
    height: 100%;
    fill: ${props => props.theme.color};
`