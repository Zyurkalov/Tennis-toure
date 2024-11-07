import { useEffect, useState } from "react";
import { maxScreenMobile, minTabletMobile } from "../../services/constants";

export const enum ScreenType {
    mobile= 'Mobile',
	tablet = 'Tablet',
	desktop = 'Desktop'
}

export function useWindowsSize () {
    const [windowsType, setWindowsType] = useState('')

    useEffect(() => {
        const checkWindowsSize = () => {
            if (window.innerWidth < maxScreenMobile) {
                setWindowsType(ScreenType.mobile);
            } else if (window.innerWidth >= maxScreenMobile && window.innerWidth < minTabletMobile) {
                setWindowsType(ScreenType.tablet);
            } else {
                setWindowsType(ScreenType.desktop);
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