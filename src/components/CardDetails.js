import React from 'react';

import {Link} from 'react-router-dom';
import Card from './Card';

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
                <button className="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    );
}

export default CardDetails;