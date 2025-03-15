import { useTheme } from 'styled-components'
import { useEffect } from 'react'
import features from './features'
import gsap from 'gsap'

function useAnimation() {
    const theme = useTheme()

    useEffect(() => {
        features.map((feature, index) => {
            gsap.to(`#features>.list>.feature:nth-child(${index+1})`, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.1*index,
                border: `1px solid ${theme.primary}`,
                scrollTrigger: {
                    start: 'bottom bottom',
                    trigger: `#features>.list>.feature:nth-child(${index+1})`
                }
            })
        })
    })
}

export default useAnimation