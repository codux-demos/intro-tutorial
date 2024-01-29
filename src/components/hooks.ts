import { useEffect, useRef } from 'react';

export function useRequestAnimationFrame(callback: () => void) {
    const ref = useRef<number>(0);

    useEffect(() => {
        function onFrame() {
            callback();
            ref.current = requestAnimationFrame(onFrame);
        }

        ref.current = requestAnimationFrame(onFrame);

        return () => cancelAnimationFrame(ref.current!);
    }, [callback]);

    return ref.current;
}
