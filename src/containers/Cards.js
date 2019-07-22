import React from 'react';

import CardsList from '../components/CardsList';

import { Link } from 'react-router-dom';

import api from '../api';

import PageLoading from '../components/PageLoading';

import PageError from '../components/PageError';

class Cards extends React.Component{

    // Inicializamos el estado
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    // Traemos la data antes de mostrar el componente 
    componentDidMount(){

        this.fetchData();
    }

    fetchData = async () => {

        this.setState({loading: true, error: null})

        try{

            const data = await api.cards.list(); 
            this.setState({loading: false, data: data});

        }catch(error){

            this.setState({ loading: false, error: error });
        }
        
    }
    
    render(){
        
        if(this.state.loading == true){
            return <PageLoading />;
        }

        if(this.state.error){
            return <PageError error={this.state.error} />; 
        }
        
        return(
            <React.Fragment>
                <div className="text-center">
                    <Link to="/cards/new" className="btn btn-primary">New Player</Link>
                </div>
                <CardsList players={this.state.data} />
            </React.Fragment>
        )
    }
}

export default Cards;