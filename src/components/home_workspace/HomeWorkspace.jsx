import { BiSolidUserAccount } from 'react-icons/bi';
import { AiTwotoneSetting } from 'react-icons/ai';
import './style/homeWorkspace.css';
import BoardCard from '../board_card/BoardCard';

const HomeWorkspace = ({ workspace }) => {
    return (
        <>
            <div className="boards__home__workspace__header">
                <h3>{workspace.name}</h3>
                <div className="boards__home__workspace__header__buttons">
                    <button>
                        <BiSolidUserAccount
                            className={
                                'boards__home__workspace__header__buttons__icon'
                            }
                        />
                        Members
                    </button>
                    <button>
                        <AiTwotoneSetting className="boards__home__workspace__header__buttons__icon" />
                        Settings
                    </button>
                </div>
            </div>
            <div className="boards__home__workspace__content">
                {workspace.boards.length !== 0 ? (
                    workspace.boards.map((board) => <BoardCard board={board} />)
                ) : (
                    <BoardCard
                        board={{ name: 'Create new board' }}
                        action={() => alert('Create new board')}
                    />
                )}
            </div>
        </>
    );
};

export default HomeWorkspace;
