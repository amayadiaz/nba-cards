import React from 'react';

class CardForm extends React.Component{

    /*state = {};

    handleChange = e =>{
        console.log({
            name: e.target.name,
            value: e.target.value
        });
        this.setState({
            [e.target.name]: e.target.value, 
        })
    }

    handleClick = e =>{
        console.log('Button was clicked');
    }

    handleSubmit = e =>{
        e.preventDefault();
        console.log('Form was submitted');
        console.log(this.state);

    }*/

    render(){
        return(
            <form onSubmit={this.props.onSubmit} className="Card_Form">
                <h3>Add new Player</h3>
                <hr></hr>
                <div className="form-group">
                    <label>Avatar</label>
                    <input onChange={this.props.onChange} type="text" className="form-control" name="avatarUrl" placeholder="Enter url avatar" value={this.props.formValues.avatarUrl} />
                </div>
                <div className="form-group">
                    <label>Player Name</label>
                    <input onChange={this.props.onChange} type="text" className="form-control" name="playerName" placeholder="Enter player name" value={this.props.formValues.playerName} />
                </div>
                <div className="form-group">
                    <label>Points</label>
                    <input onChange={this.props.onChange} type="text" className="form-control" name="points" placeholder="Enter points" value={this.props.formValues.points} />
                </div>
                <div className="form-group">
                    <label>Rebounds</label>
                    <input onChange={this.props.onChange} type="text" className="form-control" name="rebounds" placeholder="Enter rebounds" value={this.props.formValues.rebounds} />
                </div>
                <div className="form-group">
                    <label>Assits</label>
                    <input onChange={this.props.onChange} type="text" className="form-control" name="assists" placeholder="Enter assists" value={this.props.formValues.assists} />
                </div>
                <button onClick={this.handleClick} type="submit" className="btn btn-primary">Save</button>

                {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
            </form>
        );
    }
}

export default CardForm;
