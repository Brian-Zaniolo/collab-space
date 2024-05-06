import './style/workspaceBoards.css';
import BoardCard from '../../components/board_card/BoardCard';

const WorkspaceBoards = () => {
    return (
        <div className="workspaceBoard__container">
            <h1>Workspace Boards</h1>
            {demoData && demoData.map((board) => <BoardCard board={board} />)}
            {demoData.length === 0 && (
                <BoardCard
                    board={{ name: 'Create new board' }}
                    action={() => alert('Create new board')}
                />
            )}
        </div>
    );
};

export default WorkspaceBoards;

const demoData = [
    {
        id: 1,
        name: 'Board 1',
    },
];
