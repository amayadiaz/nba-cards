import React from 'react';

import '../styles/Card.css';

class Card extends React.Component{


    render(){
        return(
            <div className="Card">
                <div className="Card_Logo">
                    <img className="Logo" src="https://www.stickpng.com/assets/images/58428defa6515b1e0ad75ab4.png" alt="NBA Logo"></img>
                </div>
                <div className="Card_Info">
                    <img className="Avatar img-fluid" src={this.props.avatar}></img>
                    <hr></hr>
                    <h1 className="Name">{this.props.playerName}</h1>
                    <hr></hr>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <p>PTS</p>
                            <p className="Number">{this.props.points}</p>
                        </div>
                        <div className="col-md-4">
                            <p>REB</p>
                            <p className="Number">{this.props.rebounds}</p>
                        </div>
                        <div className="col-md-4">
                            <p>AST</p>
                            <p className="Number">{this.props.assists}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;

