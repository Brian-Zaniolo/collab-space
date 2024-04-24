import './style/sidebarHome.css';
import SidebarButton from '../sidebar_button/SidebarButton';
import SidebarSpacesButton from '../sidebar_spaces_button/SidebarSpacesButton';

const SidebarHome = ({ structure }) => {
    return (
        <div className="sidebarHome">
            <div className="sidebarHome__content">
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
export default SidebarHome;
