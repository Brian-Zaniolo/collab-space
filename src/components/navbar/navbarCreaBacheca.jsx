import { useState, useRef } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { RxCross1 } from 'react-icons/rx';
import useOutsideClick from '../../hooks/useOutsideClick';
import './navbarCreaBacheca.css';
import { FaAngleDown } from 'react-icons/fa6';
import { MdPublic } from 'react-icons/md';
import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';

const NavbarCreaBacheca = ({ back, close }) => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('Spazio di lavoro');
    const [open, setOpen] = useState(false);

    const valuesVisibility = [
        { name: 'Privato', key: 1 },
        { name: 'Spazio di lavoro', key: 2 },
        { name: 'Pubblico', key: 3 },
    ];

    const refOutside = useRef();
    const refButton = useRef();

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const onVisibilityClick = (string) => {
        setValue(string);
        setOpen((prev) => !prev);
    };

    useOutsideClick(refOutside, refButton, () => setOpen(false));

    return (
        <>
            <li className="creaBachecaLi">
                <button
                    className="buttonDefault"
                    style={{
                        backgroundColor: 'var(--onBackground)',
                        display: 'inline',
                        float: 'left',
                    }}
                    onClick={back}
                >
                    <IoArrowBack />
                </button>
                <p
                    style={{
                        display: 'inline-block',
                        textAlign: 'center',
                        width: '73%',
                    }}
                >
                    Crea Bacheca
                </p>
                <button
                    className="buttonDefault"
                    style={{
                        backgroundColor: 'var(--onBackground)',
                        display: 'inline',
                        float: 'right',
                    }}
                    onClick={close}
                >
                    <RxCross1 />
                </button>
            </li>
            <li className="creaBachecaLi">
                <div>
                    <p style={{ display: 'inline-block' }}>
                        Titolo della bacheca
                    </p>
                    <p style={{ color: '#e34935', display: 'inline-block' }}>
                        *
                    </p>
                </div>
                <form action="">
                    <input
                        className="navbar_titoloBachecaInput"
                        type="text"
                        value={title}
                        onChange={handleTitle}
                        required
                    />
                    <div>
                        <p
                            style={{
                                color: '#e34935',
                                display: 'inline-block',
                            }}
                        >
                            *
                        </p>
                        <p style={{ display: 'inline-block' }}>
                            Il titolo della bacheca è obbligatorio
                        </p>
                    </div>
                    <p>Visibilità</p>
                    <div>
                        <div
                            onClick={() => setOpen(!open)}
                            className="visibility_selected"
                            ref={refButton}
                        >
                            {value}
                            <span
                                className="navbar_dropDownMenu"
                                style={{ float: 'right', marginRight: '3px' }}
                            >
                                <FaAngleDown className="navbar_markdown" />
                            </span>
                        </div>
                        {open && (
                            <ul
                                ref={refOutside}
                                style={{ paddingLeft: 0, width: '356px' }}
                            >
                                {valuesVisibility.map((value) => {
                                    return (
                                        <li
                                            className="visibility_selected_content"
                                            onClick={() =>
                                                onVisibilityClick(value.name)
                                            }
                                            key={value.key}
                                        >
                                            {value.key === 1 ? (
                                                <>
                                                    <p>
                                                        <span
                                                            style={{
                                                                marginRight:
                                                                    '3px',
                                                            }}
                                                        >
                                                            <RiGitRepositoryPrivateFill />
                                                        </span>{' '}
                                                        {value.name}
                                                    </p>
                                                    <p
                                                        style={{
                                                            textAlign:
                                                                'justify',
                                                        }}
                                                    >
                                                        I membri della bacheca e
                                                        gli amministratori dello
                                                        Spazio di lavoro di
                                                        Collab Space possono
                                                        vedere e modificare
                                                        questa bacheca.
                                                    </p>
                                                </>
                                            ) : value.key === 2 ? (
                                                <>
                                                    <p>
                                                        <span
                                                            style={{
                                                                marginRight:
                                                                    '5px',
                                                            }}
                                                        >
                                                            <FaUserFriends />
                                                        </span>
                                                        {value.name}
                                                    </p>
                                                    <p
                                                        style={{
                                                            textAlign:
                                                                'justify',
                                                        }}
                                                    >
                                                        Tutti i membri dello
                                                        Spazio di lavoro di
                                                        Collab Space possono
                                                        vedere e modificare
                                                        questa bacheca.
                                                    </p>
                                                </>
                                            ) : value.key === 3 ? (
                                                <>
                                                    <p>
                                                        <span
                                                            style={{
                                                                marginRight:
                                                                    '5px',
                                                            }}
                                                        >
                                                            <MdPublic />
                                                        </span>
                                                        {value.name}
                                                    </p>
                                                    <p
                                                        style={{
                                                            textAlign:
                                                                'justify',
                                                        }}
                                                    >
                                                        Chiunque abbia accesso a
                                                        internet può vedere
                                                        questa bacheca. Solo i
                                                        membri della bacheca
                                                        possono apportare
                                                        modifiche.
                                                    </p>
                                                </>
                                            ) : (
                                                value.name
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="buttonDefault"
                        disabled={!title}
                        style={{
                            width: '100%',
                            marginTop: '5px',
                            marginLeft: '0',
                        }}
                    >
                        Crea
                    </button>
                </form>
            </li>
        </>
    );
};

export default NavbarCreaBacheca;
