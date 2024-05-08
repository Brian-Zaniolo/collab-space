import { Link, useLocation } from 'react-router-dom';
import './style/linkButton.css';
import { useEffect, useState } from 'react';

const LinkButton = ({ text, to }) => {
    const location = useLocation();
    const [pathName, setPathName] = useState('');

    useEffect(() => {
        setPathName(location.pathname.split('/').pop());
    }, [location]);

    return (
        <Link
            className={
                pathName === to
                    ? 'linkButton__container active'
                    : 'linkButton__container'
            }
            to={to}
        >
            {text}
        </Link>
    );
};

export default LinkButton;
