import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    padding-top: 3em;
    padding-left: 8em;
    flex-direction: row;
    padding-bottom: 3em;
    background-color: ${props => props.theme.backgroundSecondary};
`

export const ContainerNumber = styled.div`
    display: flex;
    align-items: center;
`

export const Number = styled.span`
    font-size: 3em;
    font-weight: bold;
    color: ${props => props.theme.primary};
`

export const Text = styled.span`
    color: ${props => props.theme.secondary};
`