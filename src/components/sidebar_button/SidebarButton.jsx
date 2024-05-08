import './style/sidebarButton.css';
import { v4 as uuidv4 } from 'uuid';
import { homeRouter } from '../../pages/home/Home';

const SidebarButton = ({
    leadingIcon,
    trailingIcon,
    text,
    route,
    isFirst,
    groupName = 'sidebar',
}) => {
    const id = uuidv4();
    return (
        <div>
            <input
                type="radio"
                id={id}
                name={groupName}
                className="sidebar__button__input"
                onInput={() => homeRouter.navigate(route)}
                key={id}
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
