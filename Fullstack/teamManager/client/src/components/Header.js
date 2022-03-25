import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return(
        <div className="header-margin">
            <Link className="header-text" to="#">Manage Players</Link><span className="header-text"> | </span><Link className="header-text" to="#">Manage Player Status</Link>
        </div>
    )
}

export default Header;