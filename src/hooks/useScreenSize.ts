import { useState, useEffect } from 'react';

interface ScreenSize {
    width: number | undefined;
    height: number | undefined;
}

const useScreenSize = () => {
    // Explicitly typing the initial state
    const [screenSize, setScreenSize] = useState<ScreenSize>({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setScreenSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            };

            handleResize();

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return screenSize;
};

export default useScreenSize;
