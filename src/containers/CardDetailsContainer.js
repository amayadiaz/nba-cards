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
        data: undefined
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

    render(){

        if (this.state.loading) {
            return <PageLoading />
        }
        
        if (this.state.error){
            return <PageError error={this.state.error} />
        }

        return (
            <CardDetails card={this.state.data} />
        );
    }
}

export default CardDetailsContainer;