import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        scrollbar-width: thin;
        box-sizing: border-box;
        flex-direction: column;
        scroll-behavior: smooth;
        font-family: "Montserrat", sans-serif;
        scrollbar-color: ${props => props.theme.color} ${props => props.theme.primary};
        
        ::-webkit-scrollbar {
            width: 12px;
        }

        ::-webkit-scrollbar-track {
            background: ${props => props.theme.primary};
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 16px;
            background-color: ${props => props.theme.color};
        }
    }

    body {
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.color};
    }

    .swiper .swiper-wrapper {
        flex-direction: row;
    }
`