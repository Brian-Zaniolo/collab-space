import './navbarNotification.css';

const NavbarNotification = () => {
    return (
        <>
            <ul className="notificationDropdown">
                <li>
                    {' '}
                    <h2 style={{ display: 'inline-block' }}>Notifiche</h2>
                    <p style={{ display: 'inline', right: '10px', position: 'absolute', marginTop: '20px' }}>
                        Mostra solo non lette{' '}
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </p>
                </li>
                <li>
                    <h4>Non ci sono notifiche</h4>
                    <p>Work in progress</p>
                </li>
            </ul>
        </>
    );
};

export default NavbarNotification;
