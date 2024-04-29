
import "./CardDropDownAction.css"
import React from "react";
import {IoClose} from "react-icons/io5";



const CardDropDownAction = ({ closeMenu }) => {
    return (
        <ul className="card-dropdown-menu">
            <div className="card-dropdown-header">
                <div/>
                <h3 > Azioni sulla Lista</h3>
                <IoClose onClick={closeMenu}
                         className={"card-icon-btn"}    size={20}   />
            </div>

            <li>Aggiungi scheda</li>
            <li>Copia lista</li>
            <li>Segui</li>
            <hr/>
            <li>Sposta tutte le schede in questa lista ...</li>
            <li>Archivia tutte le schede in questa lista</li>
            <hr/>
            <li> Archivia questa lista</li>
        </ul>
    );

}
export default CardDropDownAction;
