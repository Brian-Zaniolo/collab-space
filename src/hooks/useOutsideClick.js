import { useEffect } from 'react';

const useOutsideClick = (ref, buttonRef, callback) => {
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
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [ref, buttonRef, callback]);
};

export default useOutsideClick;
