import React from 'react';
import {colors} from "../../utils/color";
import {BsThreeDots} from "react-icons/bs";
import {FaPlus} from "react-icons/fa";
import {MdOutlineAddToPhotos} from "react-icons/md";
import styled from 'styled-components';


const Card = ()=> {
    return (
        <div style={cardStyle.conatiner}>
            <div style={cardStyle.titleBox}>
                <h4>Card Title</h4>
                <BsThreeDots />
            </div>
            <div style={cardStyle.footer}>
                <Button style={cardStyle.btn}>
                    <FaPlus style={{marginRight: "10px"}}/>
                    <h4>Agguingi una scheda</h4>
                </Button>
                <MdOutlineAddToPhotos/>

            </div>

        </div>
    )

}

export default Card;

const cardStyle = {
    conatiner: {
        backgroundColor: colors.winter,
        borderRadius: "12px",
        padding: "0 15px",
        margin: "2px",
        width:"272px",
        minHeight:"20px",
        maxHeight:"100%",
    },
    titleBox : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "3px",
    },
    title : {
        color: colors.blackSecondary,

    },
    footer : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
}
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
        background-color: rgba(205, 205, 205, 0.24);
        color: #333;
    }
`;