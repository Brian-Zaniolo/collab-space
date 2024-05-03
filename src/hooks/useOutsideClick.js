import { useEffect } from 'react';

const useOutsideClick = (ref, buttonRef, callback, parametro) => {
    const handleClick = (e) => {
        if (
            ref.current &&
            !ref.current.contains(e.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target)
        ) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener(parametro, handleClick);
        return () => {
            document.removeEventListener(parametro, handleClick);
        };
    }, [ref, buttonRef, callback]);
};

export default useOutsideClick;
