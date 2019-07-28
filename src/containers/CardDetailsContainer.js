import React from 'react';

import '../styles/Card.css';



import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';

import CardDetails from '../components/CardDetails';


class CardDetailsContainer extends React.Component{

    state = {
        loading: true, 
        error: null,
        data: undefined,
        modalIsOpen: false,

    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () =>{
        this.setState({loading: true, error: null})

        try {
            const data = await api.cards.read(
                this.props.match.params.cardId
            )

            this.setState({loading: false, data: data});
            
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true});
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false});
    }

    handleDeleteCard = async e =>{
        this.setState({loading: true, error: null}); 
        try {
            await api.cards.remove(this.props.match.params.cardId);
            this.setState({loading: false});
            this.props.history.push('/cards');
        } catch (error) {
            this.setState({loading: false, error: error});
        }
    }

    render(){

        if (this.state.loading) {
            return <PageLoading />
        }
        
        if (this.state.error){
            return <PageError error={this.state.error} />
        }

        return (
            <CardDetails onCloseModal={this.handleCloseModal} onOpenModal={this.handleOpenModal} modalIsOpen={this.state.modalIsOpen} card={this.state.data} onDeleteCard={this.handleDeleteCard} />
        );
    }
}

export default CardDetailsContainer;