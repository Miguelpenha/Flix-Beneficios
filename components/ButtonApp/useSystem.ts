import { useState, useEffect } from "react"

function useSystem() {
    const [system, setSystem] = useState<'Android' | 'IOS' | 'Other'>()

    useEffect(() => {
        const userAgent = navigator.userAgent

        if (/android/i.test(userAgent)) {
            setSystem('Android')
        } else if (/iPad|iPhone/i.test(userAgent)) {
            setSystem('IOS')
        } else {
            setSystem('Other')
        }
    }, [])

    return system
}

export default useSystem