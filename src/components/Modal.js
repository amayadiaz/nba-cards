import React from 'react'; 

import ReactDOM from 'react-dom';



function Modal(props) {

    const modal = (
        <div>
            <button onClick={props.onClose}>X</button>
            {props.children}
        </div>
    )

    if(!props.isOpen){
        return null;
    }
    return ReactDOM.createPortal(modal, document.getElementById('modal'));
}

export default Modal;