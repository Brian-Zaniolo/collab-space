import './style/memberManagementPage.css';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import { MdEdit } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MemberManagementPage = () => {
    const [members, setMembers] = useState(demo.members);
    const [role, setRole] = useState('');
    return (
        <div className="memberManagementPage__container">
            <ToastContainer />

            <h1>Member Management Page</h1>
            <div className="memberManagementPage__content">
                <div className="memberManagementPage__content__sideMenu">
                    <h2>Members ({members.length})</h2>
                    <div>
                        <input
                            id="all"
                            type="radio"
                            className="memberManagementPage__content__sideMenu__button__input"
                            name="role"
                            onClick={() => setMembers(demo.members)}
                            defaultChecked={true}
                        />
                        <label
                            htmlFor="all"
                            className="memberManagementPage__content__sideMenu__button"
                        >
                            <h3>All</h3>
                        </label>
                    </div>

                    <div>
                        <input
                            id="working"
                            type="radio"
                            name="role"
                            className="memberManagementPage__content__sideMenu__button__input"
                            onClick={() =>
                                setMembers(
                                    demo.members.filter(
                                        (member) => member.role === 'Working'
                                    )
                                )
                            }
                        />
                        <label
                            htmlFor="working"
                            className="memberManagementPage__content__sideMenu__button"
                        >
                            <h3>Working</h3>
                        </label>
                    </div>
                    <div>
                        <input
                            id="guest"
                            type="radio"
                            name="role"
                            className="memberManagementPage__content__sideMenu__button__input"
                            onClick={() =>
                                setMembers(
                                    demo.members.filter(
                                        (member) => member.role === 'Guest'
                                    )
                                )
                            }
                        />
                        <label
                            htmlFor="guest"
                            className="memberManagementPage__content__sideMenu__button"
                        >
                            <h3>Guest</h3>
                        </label>
                    </div>
                </div>
                <div className="memberManagementPage__content__main">
                    <div className="memberManagementPage__content__main__header">
                        <h3>Name</h3>
                        <h3>Role</h3>
                        <h3>Action</h3>
                    </div>
                    {members.length !== 0 ? (
                        members.map((member) => (
                            <div className="memberManagementPage__content__main__member">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                                <Popup
                                    position={'left center'}
                                    trigger={
                                        <button>
                                            <MdEdit className="icon" />
                                        </button>
                                    }
                                >
                                    {(close) => (
                                        <div className="member__editPopUp">
                                            <h2>EDIT</h2>
                                            <select
                                                onInput={(e) => {
                                                    setRole(e.target.value);
                                                }}
                                            >
                                                <option
                                                    value=""
                                                    defaultChecked={true}
                                                >
                                                    Select
                                                </option>
                                                <option value="Working">
                                                    Working
                                                </option>
                                                <option value="Guest">
                                                    Guest
                                                </option>
                                            </select>
                                            <button
                                                onClick={(e) => {
                                                    if (role) {
                                                        setMembers(
                                                            members.map((m) =>
                                                                m.id ===
                                                                member.id
                                                                    ? {
                                                                          ...member,
                                                                          role: role,
                                                                      }
                                                                    : m
                                                            )
                                                        );
                                                        toast.success(
                                                            'Changes saved',
                                                            {
                                                                position:
                                                                    'top-right',
                                                                autoClose: 1000,
                                                                closeOnClick: true,
                                                                pauseOnHover: true,
                                                                hideProgressBar: false,
                                                                theme: 'dark',
                                                                progressStyle: {
                                                                    background:
                                                                        'var(--primary)',
                                                                },
                                                            }
                                                        );
                                                        setRole('');
                                                        close();
                                                    }
                                                }}
                                                disabled={role === ''}
                                            >
                                                Save
                                            </button>
                                            <button
                                                type="delete"
                                                onClick={() => {
                                                    setMembers(
                                                        members.filter(
                                                            (m) =>
                                                                m.id !==
                                                                member.id
                                                        )
                                                    );
                                                    close('ciao');
                                                    toast.success(
                                                        'Member removed successfully',
                                                        {
                                                            position:
                                                                'top-right',
                                                            autoClose: 1000,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            hideProgressBar: false,
                                                            theme: 'dark',
                                                            progressStyle: {
                                                                background:
                                                                    'var(--primary)',
                                                            },
                                                        }
                                                    );
                                                }}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )}
                                </Popup>
                            </div>
                        ))
                    ) : (
                        <h3>No member yet</h3>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MemberManagementPage;

const demo = {
    members: [
        {
            id: 1,
            name: 'Member 1',
            role: 'Working',
        },
        {
            id: 2,
            name: 'Member 2',
            role: 'Guest',
        },
        {
            id: 3,
            name: 'Member 3',
            role: 'Working',
        },
        {
            id: 4,
            name: 'Member 4',
            role: 'Guest',
        },
        {
            id: 5,
            name: 'Member 5',
            role: 'Working',
        },
        {
            id: 6,
            name: 'Member 6',
            role: 'Guest',
        },
        {
            id: 7,
            name: 'Member 7',
            role: 'Working',
        },
        {
            id: 8,
            name: 'Member 8',
            role: 'Guest',
        },
    ],
};
