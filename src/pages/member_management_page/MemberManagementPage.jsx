import './style/memberManagementPage.css';
import { useState } from 'react';

const MemberManagementPage = () => {
    const [members, setMembers] = useState(demo.members);
    return (
        <div className="memberManagementPage__container">
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
                    {members.length !== 0 ? (
                        members.map((member) => (
                            <div className="memberManagementPage__content__main__member">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
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
