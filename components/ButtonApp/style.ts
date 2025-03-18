import styled from 'styled-components'

interface IContainer {
    $top?: boolean
}

export const Container = styled.a<IContainer>`
    gap: 1em;
    display: flex;
    padding: 1.2em;
    max-width: 25em;
    border-radius: 40px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1.5em;
    text-decoration: none;
    align-self: flex-start;
    justify-content: center;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    color: ${props => props.theme.color};
    margin-top: ${props => props.$top ? 0 : 3}em;
    background-color: ${props => props.theme.primary};

    &:hover {
        transform: scale(1.05);
        color: ${props => props.theme.primary};
        background-color: ${props => props.theme.color};
        box-shadow: 0px 5px 15px 15px rgba(0, 0, 0, 0.1);

        svg {
            fill: ${props => props.theme.primary};
        }
    }

    @media screen and (max-width: 900px) {
        width: 95%;
        align-self: center;
    }
`

export const Icon = styled.svg`
    height: auto;
    width: 1.5em;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    fill: ${props => props.theme.color};
`

export const Text = styled.span`
    font-size: 1em;
    font-weight: bold;

    @media screen and (max-width: 900px) {
        font-size: 0.8em;
    }
`

export const OtherVersion = styled.a`
    font-size: 1em;
    align-self: center;
    color: ${props => props.theme.primary};
`