import './style/boardsHome.css';
import HomeWorkspace from '../../components/home_workspace/HomeWorkspace';

const demoStructure = {
    yourWorkspaces: [
        {
            name: 'Mio primo workspace',
            boards: [
                {
                    id: 1,
                    name: 'Board 1',
                    color: '#f85353',
                },
                {
                    id: 2,
                    name: 'Board 2',
                    color: '#f8b853',
                },
            ],
        },
    ],
    sharedWorkspaces: [
        {
            name: 'Workspace condiviso',
            boards: [],
        },
    ],
};
const BoardsHome = ({ structure }) => {
    return (
        <div className="boards__home__container">
            {demoStructure.yourWorkspaces && <h2>YOUR WORKSPACES</h2>}
            {demoStructure.yourWorkspaces &&
                demoStructure.yourWorkspaces.map((workspace) => (
                    <HomeWorkspace workspace={workspace} />
                ))}
            {demoStructure.sharedWorkspaces && <h2>SHARED WORKSPACES</h2>}
            {demoStructure.sharedWorkspaces &&
                demoStructure.sharedWorkspaces.map((workspace) => (
                    <HomeWorkspace workspace={workspace} />
                ))}
        </div>
    );
};

export default BoardsHome;
