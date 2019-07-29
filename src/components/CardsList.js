import React from 'react';

import Card from '../components/Card';

import {Link} from 'react-router-dom';

function useSearchCards(players){

    const [ query, setQuery ] = React.useState('');

    const [filteredCards, setFilteredCards] = React.useState(players);

    React.useMemo(() => {
        
        const result = players.filter(player => {
            return `${player.playerName}`
            .toLowerCase()
            .includes(query.toLowerCase());
        });

        setFilteredCards(result);


    }, [players, query]);

    return { query, setQuery, filteredCards};

}

function CardsList (props){

    const players = props.players;

    const {query, setQuery, filteredCards} = useSearchCards(players);

    if(filteredCards.length ==0){
        return(
            <React.Fragment>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label>Filter Cards</label>
                            <input type="text" className="form-control" 
                                value={query} 
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                            >
                            </input>
                        </div>
                    </div>
                </div>
                <h3>No cards were found</h3>
                    <Link to="/cards/new" className="btn btn-primary">New Player</Link>
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Filter Cards</label>
                        <input type="text" className="form-control" 
                            value={query} 
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                        >
                        </input>
                    </div>
                </div>
            </div>
            <div className="row">
                
                {filteredCards.map(player =>{
                    return (
                        <div className="col-md-4" key={player.id}>
                            <Link to={`/cards/${player.id}`} className="text-reset text-decoration-none">
                                <Card playerName={player.playerName} avatar={player.avatarUrl} points={player.points} rebounds={player.rebounds} assists={player.assists} />
                            </Link>
                        </div>
                    )
                })}

            </div>
        </React.Fragment>
    )
}

export default CardsList; 