import React from 'react';

import '../styles/Card.css';

import Card from '../components/Card';

import CardForm from '../components/CardForm';

import api from '../api';
import PageLoading from '../components/PageLoading';

class CardNew extends React.Component{

    state = { 
        loading: false, 
        error: null,
        form: {
            avatarUrl: '',
            playerName: '',
            points: '',
            rebounds: '',
            assists: '',
        } 
    };

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleSubmit = async e =>{

        e.preventDefault();
        this.setState({loading:true, error: null})

        try{
            await api.cards.create(this.state.form);
            this.setState({loading: false});

            this.props.history.push('/cards');

        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    render(){

        if(this.state.loading){
            return <PageLoading />;
        }

        return(
            <div className="CardNew">
                <div className="row">
                    <div className="col-6">
                        <Card playerName={this.state.form.playerName || '-------'} points={this.state.form.points || '0.0'} rebounds={this.state.form.rebounds || '0.0'} assists={this.state.form.assists || '0.0'} 
                        avatar={this.state.form.avatarUrl} />
                    </div>
                    <div className="col-6">
                        <CardForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CardNew;

