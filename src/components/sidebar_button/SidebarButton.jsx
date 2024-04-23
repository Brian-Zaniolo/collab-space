import { homeRouter } from '../../pages/home/home';
import './style/sidebarButton.css';
import { v4 as uuidv4 } from 'uuid';

const SidebarButton = ({ leadingIcon, trailingIcon, text, route, isFirst }) => {
    const id = uuidv4();
    return (
        <div>
            <input
                type="radio"
                id={id}
                name="sidebar__button"
                className="sidebar__button__input"
                key={id}
                onInput={() => {
                    homeRouter.navigate(route);
                }}
                defaultChecked={isFirst}
            />
            <label htmlFor={id} className="sidebar__button">
                <div className="leading">
                    {leadingIcon}
                    {text}
                </div>
                {trailingIcon}
            </label>
        </div>
    );
};
export default SidebarButton;
