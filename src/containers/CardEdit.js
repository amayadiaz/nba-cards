import React from 'react';

import '../styles/Card.css';

import Card from '../components/Card';

import CardForm from '../components/CardForm';

import api from '../api';
import PageLoading from '../components/PageLoading';

class CardEdit extends React.Component{

    state = { 
        loading: true, 
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
            await api.cards.update(this.props.match.params.cardId, this.state.form);
            this.setState({loading: false});

            this.props.history.push('/cards');

        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error:null })

        try{
            const data = await api.cards.read(this.props.match.params.cardId);

            this.setState({ loading:false, form: data})

        }catch(error){
            this.setState({ loading:false, error: error})
        }

    };

    render(){

        if(this.state.loading){
            return <PageLoading />;
        }

        return(
            <div className="CardEdit">
                <div className="row">
                    <div className="col-6">
                        <Card playerName={this.state.form.playerName || '-------'} points={this.state.form.points || '0.0'} rebounds={this.state.form.rebounds || '0.0'} assists={this.state.form.assists || '0.0'} 
                        avatar={this.state.form.avatarUrl} />
                    </div>
                    <div className="col-6">
                        <h3>Edit Player</h3>
                        <hr></hr>
                        <CardForm onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form} error={this.state.error} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CardEdit;

