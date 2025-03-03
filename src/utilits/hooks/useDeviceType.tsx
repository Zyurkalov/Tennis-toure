import { useState, useEffect } from 'react';
import { maxScreenMobile, minTabletMobile } from '../../services/constants';

const useDeviceType = () => {
    const [mobile, setMobile] = useState(false);
    const [tablet, setTablet] = useState(false);
    const [desktop, setDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            setMobile(width < maxScreenMobile);
            setTablet(width >= maxScreenMobile && width < minTabletMobile);
            setDesktop(width >= minTabletMobile);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return [mobile, tablet, desktop];
};

export default useDeviceType;
