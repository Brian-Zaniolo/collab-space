import { useEffect, useRef, useState } from 'react';
import { colors } from '../../utils/color';
import { MdOutlineEdit } from 'react-icons/md';
import { getCardItems, updateCardItem } from '../../store/slices/CardItemSlice';
import { useDispatch, useSelector } from 'react-redux';
import EditScheda from './EditScheda';
import useOutsideClick from '../../hooks/useOutsideClick';

const CardItem = ({ item }) => {
    const [hover, setHover] = useState(false);
    const textareaRef = useRef(null);
    const [disableEditing, setDisableEditing] = useState(true);
    const [newItem, setNewItem] = useState('');
    const [editPosition, setEditPosition] = useState(null);
    const editRef = useRef(null);
    const buttonRef = useRef(null);

    useOutsideClick(editRef, buttonRef, () => setDisableEditing(true));

    useEffect(() => {
        const adjustHeight = () => {
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
        };
        adjustHeight();
    }, [newItem]);

    const handleEditClick = (e) => {
        e.stopPropagation();
        const x = e.clientX;
        const y = e.clientY;
        setEditPosition({ x, y });
        setDisableEditing(false);
        setHover(false);
    };
    const handleMouseEnter = () => {
        if (disableEditing) {
            setHover(true);
        }
    };

    const handleMouseLeave = () => {
        if (!disableEditing || hover) {
            setHover(false);
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                ...cardItemStyle.container,
                borderColor: hover ? `${colors.primary}` : 'transparent',
            }}
        >
            <textarea
                ref={textareaRef}
                style={cardItemStyle.input}
                placeholder={item.title}
                value={item.title}
                className={'card-item-area'}
                disabled={disableEditing}
                onChange={(e) => setNewItem(e.target.value)}
            />
            {hover && (
                <div ref={buttonRef}>
                    <MdOutlineEdit
                        onClick={handleEditClick}
                        className={'card-item-edit'}
                        style={cardItemStyle.edit}
                    />
                </div>
            )}
            {!disableEditing && (
                <EditScheda
                    ref={editRef}
                    position={editPosition}
                    setEditing={setDisableEditing}
                    item={item}
                />
            )}
        </div>
    );
};
export default CardItem;
const cardItemStyle = {
    container: {
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0px 1px 1px #091e4240, 0px 0px 1px #091e424f',
        margin: '5px 0',
        padding: '0 5px',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        width: 'auto',
        border: '2px solid transparent',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
    },
    input: {
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        color: colors.black,
        fontWeight: '500',
        border: 'none',
        margin: '0',
        fontSize: '14px',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'pre-wrap',
        width: '100%',
        maxWidth: '100%',
        maxHeight: '8rem',
        resize: 'none',
    },
    edit: {
        position: 'absolute',
        right: '5px',
        top: '30%',
        transform: 'translateY(-50%)',
        padding: '4px',
    },
};
