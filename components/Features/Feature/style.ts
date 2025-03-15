import styled from 'styled-components'

export const Container = styled.li`
    gap: 1em;
    width: 90%;
    padding: 1em;
    display: flex;
    max-width: 22em;
    border-radius: 10px;
    background-color: ${props => props.theme.color};
    border: 1px solid ${props => props.theme.primary};
`

export const Icon = styled.svg`
    width: 1.5em;
    height: auto;
    padding: 0.1em;
    border-radius: 50%;
    fill: ${props => props.theme.color};
    background-color: ${props => props.theme.primary};
`

export const Title = styled.span`
    font-size: 1.5em;
    font-weight: bold;
    align-self: flex-start;
    color: ${props => props.theme.secondary};
`

export const Description = styled.span`
    font-size: 1em;
    color: ${props => props.theme.colorSecondary};
`