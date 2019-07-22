import React from 'react';

import '../styles/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar_Container">
                <img className="Navbar_Logo" src="https://www.stickpng.com/assets/images/58428defa6515b1e0ad75ab4.png"></img>
            </div>
        )
    }
}

export default Navbar;