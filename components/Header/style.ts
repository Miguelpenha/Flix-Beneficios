import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.header`
    width: 100%;
    display: flex;
    padding: 2em 8em;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.primary};

    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const Logo = styled(Image)`
    width: 12em;
    height: auto;
    display: flex;
`

export const Menu = styled.ul`
    gap: 2em;
    display: flex;
    list-style: none;
    flex-direction: row;

    @media screen and (max-width: 900px) {
        margin-top: 2em;
    }
`

export const OptionContainer = styled.li`
    
`

export const Option = styled.a`
    gap: 0.5em;
    display: flex;
    font-size: 1em;
    font-weight: 500;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.color};
`

export const OptionIcon = styled.svg`
    width: 1.5em;
    height: auto;
    fill: ${props => props.theme.color};
`