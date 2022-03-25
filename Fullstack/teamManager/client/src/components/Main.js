import React from 'react';
import { Link } from 'react-router-dom';
import PlayerList from './PlayerList';
import Header from './Header';

const Main = (props) => {

    // const { passedContent } = props;

    return(
        <div>
            <Header />
            <div className="main-box">
                <Link className="" to="/player/list">List</Link><span className=""> | </span><Link className="" to="/status/game/1">Add Player</Link>
                {/* {passedContent} */}
                <PlayerList />
            </div>
        </div>
    )
}

export default Main;