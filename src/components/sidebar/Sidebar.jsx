import './style/sidebar.css';
import SidebarButton from '../sidebar_button/SidebarButton';
import SidebarSpacesButton from '../sidebar_spaces_button/SidebarSpacesButton';

const Sidebar = ({ structure }) => {
    return (
        <div className="sidebar">
            <div className="sidebar__content">
                {structure.header &&
                    structure.header.map((item, index) => {
                        return (
                            <SidebarButton
                                leadingIcon={item.icon}
                                text={item.title}
                                route={item.route}
                                isFirst={index === 0}
                            />
                        );
                    })}
                {structure.header && <hr />}
                {structure.spaces && (
                    <p className="workspaces__title">Workspaces</p>
                )}
                {structure.spaces &&
                    structure.spaces.map((item) => {
                        return <SidebarSpacesButton item={item} />;
                    })}
            </div>
        </div>
    );
};
export default Sidebar;
