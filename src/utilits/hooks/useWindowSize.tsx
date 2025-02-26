import { useEffect, useState } from 'react';
import { maxScreenMobile, minTabletMobile } from '../../services/constants';

export const enum ScreenType {
    mobile = 'Mobile',
    tablet = 'Tablet',
    desktop = 'Desktop',
}

export const useWindowsSize = () => {
    const [screen, setScreen] = useState(ScreenType.desktop);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            const width = window.innerWidth;
            if (width < maxScreenMobile) {
                setScreen(ScreenType.mobile);
            } else if (width >= maxScreenMobile && width < minTabletMobile) {
                setScreen(ScreenType.tablet);
            } else {
                setScreen(ScreenType.desktop);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [screen]);

    return screen;
};
