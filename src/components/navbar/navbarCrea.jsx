import { useState } from 'react';
import NavbarCreaBacheca from './navbarCreaBacheca';
import "./navbarCrea.css"
import NavbarCreaSpazio from './navbarCreaSpazio';

const NavbarCrea = ({close}) => {
    const [creaBacheca, setCreaBacheca] = useState(false);
    const [creaSpazio, setCreaSpazio] = useState(false);

    const handleCreaBacheca = () => {
        setCreaBacheca(!creaBacheca);
    };

    const handleCreaSpazio = () => {
        setCreaSpazio(!creaSpazio);
    }

    return (
        <>
            <ul className="navbar_dropdown-content" style={{background: 'var(--onBackground)'}}>
                {creaBacheca ? (
                    <>
                        <NavbarCreaBacheca back={handleCreaBacheca} close={close} />
                    </>
                ) : creaSpazio ? (
                        <>
                            <NavbarCreaSpazio close={close} />
                        </>
                    ) : (
                    <>
                        <li className='navbar_creaLi' onClick={handleCreaBacheca}>
                            <h4>Crea una bacheca</h4>
                            <p>
                                Una bacheca è una raccolta di schede ordinate in
                                un insieme di liste. Usala per gestire progetti,
                                tener traccia di informazioni o per organizzare
                                qualsiasi cosa.
                            </p>
                        </li>
                        <li className='navbar_creaLi' onClick={handleCreaSpazio}>
                            <h4>Crea spazio di lavoro</h4>
                            <p>
                                Uno Spazio di lavoro è un gruppo di bacheche e
                                persone. Utilizzalo per organizzare l'azienda,
                                gli hobby, la famiglia o gli amici.
                            </p>
                        </li>
                    </>
                )}
            </ul>
        </>
    );
};

export default NavbarCrea;
