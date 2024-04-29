import { IoArrowBack } from 'react-icons/io5';

const NavbarCreaBacheca = ({prova}) => {
    return (
        <>
           <button onClick={prova}><IoArrowBack /></button>
            <h3>Prova</h3>
        </>
    );
};

export default NavbarCreaBacheca;
