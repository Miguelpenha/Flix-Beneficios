import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function useAnimation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        gsap.to('#showcases>.number .value', {
            duration: 1,
            innerText: '5000',
            snap: 'innerText',
            scrollTrigger: {
                trigger: '#showcases',
                start: '70% bottom'
            }
        })
    }, [])
}

export default useAnimation