import React, { forwardRef, useEffect, useRef, useState } from 'react';
import './EditScheda.css';
import { colors } from '../../utils/color';
import { MdAccessTime } from 'react-icons/md';
import styled from 'styled-components';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BiEditAlt } from 'react-icons/bi';
import { FaLongArrowAltRight, FaRegUser } from 'react-icons/fa';
import { RiRectangleFill } from 'react-icons/ri';
import { FaRegPaste } from 'react-icons/fa6';
import { IoArchiveOutline } from 'react-icons/io5';
import { updateCardItem } from '../../store/slices/CardItemSlice';
import { useDispatch } from 'react-redux';

const EditScheda = forwardRef(({ position, setEditing, item }, ref) => {
    const dispatch = useDispatch();
    const textareaRef = useRef(null);
    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };
    const handleSave = (e) => {
        e.preventDefault();
        dispatch(updateCardItem({ id: item.id, value: text }));
        setEditing(true);
    };
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [text]);
    if (!position) return null;
    return (
        <>
            <div
                style={editItemStyle.modalBackdrop}
                onClick={() => setEditing(true)}
            ></div>
            <div
                ref={ref}
                style={{
                    ...editItemStyle.editCardContainer,
                    top: `${position.y}px`,
                    left: `${position.x}px-380px`,
                }}
            >
                <form onSubmit={(e) => handleSave(e)}>
                    <textarea
                        ref={textareaRef}
                        className={'edit-card-input'}
                        style={editItemStyle.input}
                        onChange={handleChange}
                        value={text}
                    />
                    <button
                        type="submit"
                        className={'edit-card-save-btn'}
                        style={editItemStyle.editCardSaveBtn}
                    >
                        Salva
                    </button>
                </form>

                <div style={editItemStyle.editBtnContainer}>
                    <EditLateralButton>
                        <AiOutlineCreditCard style={editItemStyle.icon} />
                        <span>Apri scheda</span>
                    </EditLateralButton>
                    <EditLateralButton>
                        <BiEditAlt style={editItemStyle.icon} />
                        <span>Modifica etichetta</span>
                    </EditLateralButton>
                    <EditLateralButton>
                        <FaRegUser style={editItemStyle.icon} />
                        <span>Cambia membri</span>
                    </EditLateralButton>
                    <EditLateralButton>
                        <RiRectangleFill style={editItemStyle.icon} />
                        <span>Cambia copertina</span>
                    </EditLateralButton>
                    <EditLateralButton>
                        <MdAccessTime style={editItemStyle.icon} />
                        <span>Modifica le date</span>
                    </EditLateralButton>
                    <EditLateralButton>
                        <FaLongArrowAltRight style={editItemStyle.icon} />
                        <span> Sposta</span>
                    </EditLateralButton>
                    <EditLateralButton>
                        <FaRegPaste style={editItemStyle.icon} />
                        <span>Copia</span>
                    </EditLateralButton>
                    <EditLateralButton>
                        <IoArchiveOutline style={editItemStyle.icon} />
                        <span>Archivia</span>
                    </EditLateralButton>
                </div>
            </div>
        </>
    );
});

export default EditScheda;

const editItemStyle = {
    modalBackdrop: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1,
    },
    editCardContainer: {
        position: 'fixed',
        zIndex: 1000,
        display: 'flex',
        padding: '5px',
        margin: '-15px',
        width: '420px',
        transformOrigin: 'left top',
    },
    editBtnContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    editCardSaveBtn: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        textAlign: 'center',
        margin: '5px 0',
        cursor: 'pointer',
    },
    input: {
        border: `1px solid ${colors.blackSecondary}`,
        borderRadius: '10px',
        color: colors.black,
        fontWeight: '500',
        margin: '0',
        padding: '12px',
        fontSize: '14px',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        whiteSpace: 'normal',
        width: '85%',
        maxWidth: '100%',
        maxHeight: '8rem',
        minHeight: '4rem',
        resize: 'none',
    },

    saveBtn: {
        backgroundColor: colors.primary,
        color: colors.winter,
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        margin: '5px 0',
    },
    icon: {
        marginRight: '5px',
    },
};
export const EditLateralButton = styled.button`
    display: flex;
    align-items: center;
    padding: 6px 12px 6px 10px;
    margin: 3px 0px;
    border-radius: 5px;
    box-shadow: none;
    font-weight: 500;
    color: #172b4d;
    font-size: 14px;
    &:hover {
        background-color: rgb(228, 224, 224);
        color: #333;
        cursor: pointer;
    }
`;
