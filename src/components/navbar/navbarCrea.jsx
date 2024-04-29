import { useState } from 'react';
import NavbarCreaBacheca from './navbarCreaBacheca';

const NavbarCrea = () => {
    const [creaBacheca, setCreaBacheca] = useState(false);

    const handleCreaBacheca = () => {
        setCreaBacheca(!creaBacheca);
    };

    return (
        <>
            <ul className="navbar_dropdown-content" style={{background: 'var(--onBackground)'}}>
                {creaBacheca ? (
                    <NavbarCreaBacheca prova={handleCreaBacheca } />
                ) : (
                    <>
                        <li onClick={handleCreaBacheca}>
                            <h4>Crea una bacheca</h4>
                            <p>
                                Una bacheca è una raccolta di schede ordinate in
                                un insieme di liste. Usala per gestire progetti,
                                tener traccia di informazioni o per organizzare
                                qualsiasi cosa.
                            </p>
                        </li>
                        <li>
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
