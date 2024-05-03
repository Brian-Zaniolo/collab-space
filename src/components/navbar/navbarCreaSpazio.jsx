import { useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { RxCross1 } from 'react-icons/rx';
import useOutsideClick from '../../hooks/useOutsideClick';
import './navbarCreaSpazio.css';

const NavbarCreaSpazio = ({ close }) => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('Scegli...');
    const [title, setTitle] = useState('')

    const valuesTipoSpazio = [
        { name: 'Piccole attività', key: 1 },
        { name: 'Marketing', key: 2 },
        { name: 'Istruzione', key: 3 },
        { name: 'Ingegneria-IT', key: 4 },
    ];

    const refOutside = useRef();
    const refButton = useRef();

    useOutsideClick(refOutside, refButton, () => setOpen(false), 'mousedown');

    const handleSelectedValue = (e) => {
        setSelectedValue(e.target.innerText);
        setOpen(false);
    };

    return (
        <>
            <div className="modalCreaSpazio" onClick={close}>
                <div
                    className="modalContentCreaSpazio"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="modalContentCreaSpazioText">
                        <h3>Creiamo uno Spazio di lavoro</h3>
                        <p>
                            Aumenta la produttività semplificando l'accesso alle
                            bacheche in un unico luogo.
                        </p>
                        <form action="">
                            <p
                                style={{
                                    marginBottom: '2px',
                                    fontSize: 'small',
                                }}
                            >
                                Nome dello Spazio di lavoro
                            </p>
                            <input
                                type="text"
                                className="modalCreaSpazioInput"
                                placeholder="Nome Spazio: ex. Collab Space"
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                            <p
                                style={{
                                    marginTop: '3px',
                                    fontSize: 'x-small',
                                }}
                            >
                                Il nome della tua azienda, del tuo gruppo o
                                della tua organizzazione
                            </p>
                            <p
                                style={{
                                    marginTop: '25px',
                                    fontSize: 'small',
                                    marginBottom: '3px',
                                }}
                            >
                                Tipo di Spazio di lavoro
                            </p>
                            <div width="80%">
                                <div
                                    onClick={() => setOpen(!open)}
                                    className="modalSpazioSelect"
                                    ref={refButton}
                                >
                                    {selectedValue}
                                    <span
                                        className=""
                                        style={{
                                            float: 'right',
                                            marginRight: '3px',
                                        }}
                                    >
                                        <FaAngleDown className="navbar_markdown" />
                                    </span>
                                </div>
                                {open && (
                                    <ul
                                        ref={refOutside}
                                        style={{
                                            paddingLeft: 0,
                                            width: '30%',
                                            zIndex: 1,
                                            position: 'absolute',
                                            border: '2px solid grey',
                                            borderRadius: '8px',
                                            fontSize: 'small',
                                            marginTop: '0',
                                        }}
                                    >
                                        {valuesTipoSpazio.map((value) => {
                                            return (
                                                <li
                                                    className="visibility_selected_content_modal"
                                                    onClick={(e) =>
                                                        handleSelectedValue(e)
                                                    }
                                                    key={value.key}
                                                >
                                                    {value.name}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>
                            <p
                                style={{
                                    fontSize: 'small',
                                    marginBottom: '2px',
                                    marginTop: '30px',
                                }}
                            >
                                Descrizione dello Spazio di lavoro (facoltativo)
                            </p>
                            <textarea
                                className="modalCreaSpazioDescrizione"
                                placeholder="Il nostro gruppo organizza tutto qui."
                            />
                            <p
                                style={{
                                    marginTop: '2px',
                                    fontSize: 'x-small',
                                }}
                            >
                                Invita i tuoi membri sulla bacheca con due
                                parole a proposito del tuo Spazio di lavoro
                            </p>
                                <button className="modalSpazioConfirmButton" disabled={!title || selectedValue === 'Scegli...' } type="submit">
                                Continua
                            </button>
                        </form>
                    </div>
                    <div
                        style={{
                            backgroundImage:
                                'url(https://trello.com/assets/df0d81969c6394b61c0d.svg)',
                            borderTopRightRadius: '5px',
                            borderBottomRightRadius: '5px',
                        }}
                    >
                        <div>
                            <button
                                className="buttonDefault"                                
                                style={{
                                    marginTop: '5px',
                                    display: 'inline',
                                    float: 'right',
                                    background: 'none',
                                    color: 'darkgrey',
                                }}
                                onClick={close}
                            >
                                <RxCross1 />
                            </button>
                        </div>
                        <div className="modalSpazioImg">
                            <img
                                src="https://trello.com/assets/d1f066971350650d3346.svg"
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarCreaSpazio;
