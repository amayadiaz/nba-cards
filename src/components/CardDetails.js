import React from 'react';

import {Link} from 'react-router-dom';
import Card from './Card';

import DeleteCardModal from './DeleteCardModal';

function CardDetails(props){

    const card = props.card; 

    return(
        <div className="row">
            <div className="col-md-6">
                <Card avatar={card.avatarUrl} playerName={card.playerName} points={card.points} rebounds={card.rebounds} assists={card.assists} />
            </div>
            <div className="col-md-6">
                <Link className="btn btn-primary" to={`/cards/${card.id}/edit`}>
                    Edit
                </Link>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                    Delete
                </button>
                <DeleteCardModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteCard={props.onDeleteCard} />
            </div>

        </div>
    );
}

export default CardDetails;