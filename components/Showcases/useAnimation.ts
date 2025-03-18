import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function useAnimation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('#showcases>.number .value', {
            duration: 1,
            innerText: '1500',
            snap: 'innerText',
            scrollTrigger: {
                start: '60% bottom',
                trigger: '#showcases'
            }
        })
    }, [])
}

export default useAnimation