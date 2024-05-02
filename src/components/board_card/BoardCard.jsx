import { homeRouter } from '../../pages/home/Home';

const BoardCard = ({ board }) => {
    return (
        <div
            className="board__card__container"
            style={{ backgroundColor: board.color }}
            onClick={() => homeRouter.navigate('/boards/' + board.id)}
        >
            <h3 style={{ color: 'var(--white-accent)' }}>{board.name}</h3>
        </div>
    );
};

export default BoardCard;
