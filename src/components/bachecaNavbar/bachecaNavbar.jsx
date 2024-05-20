import { useState, useRef, useEffect } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { MdPublic } from 'react-icons/md';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { TbLayoutNavbar } from 'react-icons/tb';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import './bachecaNavbar.css';
import { VisibilitàSelect } from '../navbar/navbarCreaBacheca';
import BachecaNavbarFilter from './bachecaNavbarFilter';
import useOutsideClick from '../../hooks/useOutsideClick';

const BachecaNavbar = () => {
    const [nameBacheca, setNameBacheca] = useState('Placeholder');
    const [favorite, setFavorite] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Spazio di lavoro');

    const valuesVisibility = [
        { name: 'Privato', key: 1 },
        { name: 'Spazio di lavoro', key: 2 },
        { name: 'Pubblico', key: 3 },
    ];

    const refOutside = useRef();
    const refButton = useRef();

    const onVisibilityClick = (string) => {
        setValue(string);
        setOpen((prev) => !prev);
    };

    useOutsideClick(refOutside, refButton, () => setOpen(false), 'click');

    const inputRef = useRef();

    const handleChangeAndSize = (ev) => {
        const target = ev.target;
        target.style.width = '0px';
        target.style.width = `${target.scrollWidth}px`;

        setNameBacheca(ev.target.value);
    };

    useEffect(() => {
        const input = inputRef.current;
        input.style.width = '0px';
        input.style.width = `${input.scrollWidth}px`;
    }, []);

    const handleEnterDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            e.target.blur();
        }
    };

    return (
        <>
            <div className="bachecaNavbar_navigation">
                <div className="bachecaNavbar_left">
                    <input
                        ref={inputRef}
                        type="text"
                        value={nameBacheca}
                        onChange={handleChangeAndSize}
                        className="bachecaName"
                        onKeyDown={(e) => handleEnterDown(e)}
                    />
                    {favorite ? (
                        <>
                            <button
                                className="buttonDefault"
                                onClick={() => setFavorite(false)}
                            >
                                <FaStar />
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="buttonDefault"
                                onClick={() => setFavorite(true)}
                            >
                                <FaRegStar />
                            </button>
                        </>
                    )}
                    <button
                        className="buttonDefault"
                        onClick={() => setOpen(!open)}
                        ref={refButton}
                    >
                        {value === 'Privato' ? (
                            <RiGitRepositoryPrivateFill />
                        ) : value === 'Spazio di lavoro' ? (
                            <FaUserFriends />
                        ) : (
                            <MdPublic />
                        )}
                    </button>
                    <VisibilitàSelect
                        open={open}
                        refOutside={refOutside}
                        valuesVisibility={valuesVisibility}
                        onVisibilityClick={onVisibilityClick}
                    />
                    <input
                        type="radio"
                        id="Bacheca"
                        name="page"
                        defaultChecked
                    />
                    <label className="buttonDefault" htmlFor="Bacheca">
                        <span className='bachecaNavbar_icon'><TbLayoutNavbar /> </span>
                        Bacheca
                    </label>
                    <input type="radio" id="Calendario" name="page" />
                    <label className="buttonDefault" htmlFor="Calendario">
                        <span className='bachecaNavbar_icon'><FiCalendar /> </span>
                        Calendario
                    </label>
                    <input type="radio" id="Mappa" name="page" />
                    <label className="buttonDefault" htmlFor="Mappa">
                        <span className='bachecaNavbar_icon'><FiMapPin /> </span>
                        Mappa
                    </label>
                </div>
                <div className="bachecaNavbar_right">
                    <BachecaNavbarFilter />
                    <span style={{ borderLeft: '1px solid #6464643a' }}></span>
                    <button className="buttonDefault">
                        <BsThreeDots />
                    </button>
                </div>
            </div>
        </>
    );
};

export default BachecaNavbar;
