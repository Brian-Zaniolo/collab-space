import { GrSearch } from 'react-icons/gr';
import './navbar.css';
import NavbarButtonDropDown from './navbarButtonDropDown';

const Navbar = () => {
    return (
        <>
            <div className="navbar_navigation">
                <div className="navbar_leftNav">
                    <button className="buttonDefault">LOGO</button>
                    <NavbarButtonDropDown
                        buttonName={'Spazio di lavoro'}
                        control={true}
                    />
                    <NavbarButtonDropDown buttonName={'Recenti'} control={true} />
                    <NavbarButtonDropDown buttonName={'Preferita'} control={true} />

                    <NavbarButtonDropDown buttonName={'Crea'} control={true} />
                </div>

                <div className="navbar_rightNav">
                    <span
                        style={{
                            position: 'absolute',
                            marginLeft: '13px',
                            zIndex: 1,
                            color: 'white',
                        }}
                    >
                        <GrSearch />
                    </span>
                    <input type="text" placeholder="Cerca" />
                    <NavbarButtonDropDown control={false} />
                    <NavbarButtonDropDown buttonName={'Profilo'} control={true} />
                </div>
            </div>
        </>
    );
};

export default Navbar;
