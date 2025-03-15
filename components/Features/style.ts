import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    padding: 5em 0;
    align-items: center;
    background-color: ${props => props.theme.background};
`

export const Title = styled.h3`
    font-size: 2.5em;
    text-align: center;
    color: ${props => props.theme.secondary};
`

export const List = styled.ul`
    gap: 2em;
    display: flex;
    max-width: 90em;
    flex-wrap: wrap;
    margin-top: 5em;
    flex-direction: row;
    justify-content: center;
`