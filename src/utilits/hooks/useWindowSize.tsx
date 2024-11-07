import { useEffect, useState } from "react";

export function useWindowsSize () {
    const [windowsType, setWindowsType] = useState('')

    useEffect(() => {
        const checkWindowsSize = () => {
            if (window.innerWidth < 768) {
                setWindowsType('Mobile');
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setWindowsType('Tablet');
            } else {
                setWindowsType('Desktop');
            }
        }

        checkWindowsSize()
        window.addEventListener('resize', checkWindowsSize)

        return () => {
            window.removeEventListener('resize', checkWindowsSize)
        }
    }, [])
    
    return windowsType
}