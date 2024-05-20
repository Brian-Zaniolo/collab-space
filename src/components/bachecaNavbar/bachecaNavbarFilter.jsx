import { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { IoFilter } from 'react-icons/io5';

const BachecaNavbarFilter = () => {
    const [isVisible, setIsVisible] = useState(false);

    const refButton = useRef();
    const refOutside = useRef();

    const handleVisibility = () => {
        setIsVisible(!isVisible);
    };

    useOutsideClick(refOutside, refButton, () => setIsVisible(false), 'click');

    return (
        <>
            <button
                onClick={handleVisibility}
                className="buttonDefault"
                ref={refButton}
            >
                <span className="bachecaNavbarIcon">
                    <IoFilter />{' '}
                </span>
                Filtri
            </button>
            {isVisible ? (
                <ul className="navbar_profilo" ref={refOutside}>
                    <li>
                        <p style={{ textAlign: 'center' }}>Filtro</p>
                    </li>
                </ul>
            ) : null}
        </>
    );
};

export default BachecaNavbarFilter;
