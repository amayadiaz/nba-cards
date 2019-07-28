import React from 'react'; 

import Modal from './Modal';

function DeleteCardModal(props) {
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <div>Are you sure ?</div>
            <button onClick={props.onDeleteCard}>Delete</button>
            <button onClick={props.onClose}>Cancel</button>
        </Modal>
    );
}

export default DeleteCardModal;