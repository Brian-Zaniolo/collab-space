import { useState } from 'react';
import { MdDashboard, MdWorkspaces } from 'react-icons/md';
import './style/SidebarSpacesButton.css';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6';
import SidebarButton from '../sidebar_button/SidebarButton';
import {
    AiOutlineArrowRight,
    AiOutlineHeart,
    AiTwotoneSetting,
} from 'react-icons/ai';
import { BiSolidUserAccount } from 'react-icons/bi';

const SidebarSpacesButton = ({ item }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="sidebar__spaces-button" onClick={() => setOpen(!open)}>
            <div className="sidebar__spaces-button-header">
                <MdWorkspaces />
                {item.title}
                {open ? <FaCaretUp /> : <FaCaretDown />}
            </div>
            {open && (
                <div
                    className={'sidebar__spaces-button-dropdown'}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="dropdown__property">
                        <SidebarButton
                            text="Bacheche"
                            leadingIcon={<MdDashboard />}
                            route={item.route}
                        />
                        <SidebarButton
                            text="Punti salienti"
                            leadingIcon={<AiOutlineHeart />}
                            route={`/points/${item.id}`}
                        />
                        <SidebarButton
                            text="Membri"
                            leadingIcon={<BiSolidUserAccount />}
                            trailingIcon={
                                <AiOutlineArrowRight className="trailing__icon" />
                            }
                            route={`/workspaces/${item.id}/members`}
                        />
                        <SidebarButton
                            text="Impostazioni"
                            leadingIcon={<AiTwotoneSetting />}
                            trailingIcon={
                                <AiOutlineArrowRight className="trailing__icon" />
                            }
                            route={`/settings/${item.id}`}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SidebarSpacesButton;
