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

        this.intervalId = setInterval(this.fetchData, 10000);

    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    fetchData = async () => {

        this.setState({loading: true, error: null})

        try{

            let data = await api.cards.list(); 
            data = data.reverse();
            this.setState({loading: false, data: data});

        }catch(error){

            this.setState({ loading: false, error: error });
        }
        
    }
    
    render(){
        
        if(this.state.loading == true && !this.state.data){
            return <PageLoading />;
        }

        if(this.state.error){
            return <PageError error={this.state.error} />; 
        }
        
        return(
            <React.Fragment>
                <div className="text-center">
                    <p>{this.state.loading && '......'}</p>
                    <Link to="/cards/new" className="btn btn-primary">New Player</Link>
                </div>
                <CardsList players={this.state.data} />
                
            </React.Fragment>
        )
    }
}

export default Cards;