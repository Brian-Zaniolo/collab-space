import { homeRouter } from '../../pages/home/Home';
import './style/boardCard.css';

const BoardCard = ({ board, action }) => {
    return (
        <div
            className="board__card__container"
            style={{ backgroundColor: board.color }}
            onClick={
                action
                    ? action
                    : () => homeRouter.navigate('/boards/' + board.id)
            }
        >
            <h3 style={{ color: 'var(--white-accent)' }}>{board.name}</h3>
        </div>
    );
};

export default BoardCard;
