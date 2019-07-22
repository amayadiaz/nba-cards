import React from 'react';

import Card from '../components/Card';

import {Link} from 'react-router-dom';

class CardsList extends React.Component{
    render(){

        if(this.props.players.length ==0){
            return(
                <React.Fragment>
                    <h3>No cards were found</h3>
                     <Link to="/cards/new" className="btn btn-primary">New Player</Link>
                </React.Fragment>
            )
        }

        return(
            <div className="row">
                {this.props.players.map(player =>{
                    return (
                        <div className="col-md-4" key={player.id}>
                            <Card playerName={player.playerName} avatar={player.avatarUrl} points={player.points} rebounds={player.rebounds} assists={player.assists} />
                        </div>
                    )
                })}
            </div>
        )
    
    }
}

export default CardsList; 