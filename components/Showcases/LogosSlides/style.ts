import styled from 'styled-components'
import { Swiper as SwiperRaw } from 'swiper/react'
import Image from 'next/image'

export const Swiper = styled(SwiperRaw)`
    width: 70%;
    max-width: 70em;

    .swiper-slide {
        width: auto;
        align-self: center;
    }

    @media screen and (max-width: 900px) {
        width: 95%;
        margin-top: 3em;
    }
`

export const Photo = styled(Image)`
    width: 10em;
    height: auto;
    cursor: grab;
    transition-duration: 0.2s;

    &:hover {
        transform: scale(1.1);
    }
`