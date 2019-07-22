import React from 'react';

function PageError(props){
    return(
        <div className="text-center">
            <h4>{props.error.message}</h4>
        </div>
    );
}

export default PageError;