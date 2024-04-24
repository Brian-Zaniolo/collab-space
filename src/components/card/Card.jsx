import React, { useEffect, useRef, useState } from 'react';
import { colors } from '../../utils/color';
import { BsThreeDots } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import { MdOutlineAddToPhotos } from 'react-icons/md';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import './card.css';
import CardItem from './CardItem';
import CardDropDownAction from './CardDropDownAction';
import useOutsideClick from '../hooks/useOutsideClick';
import { useDispatch, useSelector } from 'react-redux';
import { addCardItem, getCardItems } from '../../store/slices/CardItemSlice';

const Card = () => {
    const dispatch = useDispatch();
    const cardItems = useSelector(getCardItems);
    const [cardTitle, setCardTitle] = useState('title');
    const [addScheda, setAddScheda] = useState(false);
    const [text, setText] = useState('');
    const textareaRef = useRef(null);
    const [toggleAction, setToggleAction] = useState(false);

    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    useOutsideClick(dropdownRef, buttonRef, () => {
        if (toggleAction) {
            setToggleAction(false);
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text.trim().length === 0) {
            return;
        }
        dispatch(addCardItem(text));
        setText('');
    };
    const handleChange = (event) => {
        setText(event.target.value);
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [text]);

    const toggleDropdown = () => {
        setToggleAction((prev) => !prev);
    };

    return (
        <div style={cardStyle.conatiner}>
            <div style={cardStyle.titleBox}>
                <input
                    type="text"
                    value={cardTitle}
                    onChange={(e) => setCardTitle(e.target.value)}
                    style={cardStyle.input}
                    className={'card-title'}
                />
                <div ref={buttonRef}>
                    <BsThreeDots
                        onClick={toggleDropdown}
                        className={'card-icon-btn'}
                        style={{
                            borderRadius: '5px',
                            padding: '2px',
                            marginLeft: '1rem',
                        }}
                    />
                </div>

                {toggleAction ? (
                    <div className="card-dropdown" ref={dropdownRef}>
                        <CardDropDownAction closeMenu={toggleDropdown} />
                    </div>
                ) : (
                    <div />
                )}
            </div>
            {cardItems.length > 0 &&
                cardItems.map((item) => <CardItem item={item} key={item.id} />)}

            {addScheda === true ? (
                <form onSubmit={handleSubmit}>
                    <textarea
                        ref={textareaRef}
                        style={cardStyle.textArea}
                        onChange={handleChange}
                        value={text}
                        className={'card-text-area'}
                        placeholder="Inserisci un titolo per questa scheda..."
                    />
                    <div style={cardStyle.btn_container}>
                        <PrimaryButton type="submit">
                            Aggiungi scheda
                        </PrimaryButton>
                        <IoClose
                            onClick={() => setAddScheda(false)}
                            className={'card-icon-btn'}
                            size={20}
                            style={cardStyle.close}
                        />
                    </div>
                </form>
            ) : (
                <div style={cardStyle.footer}>
                    <Button onClick={() => setAddScheda(true)}>
                        <FaPlus
                            style={{ marginRight: '10px', marginLeft: '5px' }}
                        />
                        <h4>Aggiungi una scheda</h4>
                    </Button>
                    <MdOutlineAddToPhotos
                        className={'card-icon-btn'}
                        style={cardStyle.close}
                    />
                </div>
            )}
        </div>
    );
};

export default Card;

const cardStyle = {
    conatiner: {
        backgroundColor: colors.winter,
        borderRadius: '12px',
        padding: '0 15px',
        margin: '2px',
        width: '272px',
        minHeight: '20px',
        maxHeight: '100%',
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '3px',
    },
    title: {
        fontSize: '14px',
        color: colors.blackSecondary,
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        padding: '10px',
        margin: '4px 0',
        borderRadius: '10px',
        backgroundColor: colors.winter,
        color: colors.black,
        fontWeight: 'bold',
        border: 'none',
        fontSize: '14px',
    },
    btn: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.primary,
        color: colors.winter,
        width: '50%',
        height: '40px',
        marginBottom: '5px',
        border: 'none',
    },
    btn_container: {
        display: 'flex',
        padding: '5px 0',
    },
    textArea: {
        width: '270px',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        boxShadow: '0px 1px 1px #091e4240, 0px 0px 1px #091e424f',
        border: 'none',
        overflow: 'hidden',
        resize: 'none',
        lineHeight: '20px',
        fontSize: '14px',
    },
    close: {
        padding: '4px',
        marginLeft: '4px',
        display: 'flex',
        alignSelf: 'center',
        borderRadius: '5px',
        marginTop: '-5px',
    },
};

export const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    border-radius: 10px;
    width: 85%;
    height: 40px;
    margin-bottom: 5px;

    &:hover {
        background-color: rgba(205, 205, 205, 0.45);
        color: #333;
        cursor: pointer;
    }
`;

export const PrimaryButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    color: ${colors.winter};
    width: 50%;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 5px;
    border: none;
    font-weight: bold;

    &:hover {
        background-color: ${colors.hover_primary};
        cursor: pointer;
    }
`;
