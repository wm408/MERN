import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Delete from './Delete';
import Header from './Header';

const PlayerList = () => {

    const [ playerList, setPlayerList ] = useState({}); //check initial state? object?
    const [ loaded, setLoaded ] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/team-manager')
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setPlayerList(res.data);
                setLoaded(true);
            })
            .catch((err)=>{
                console.log(err);
            })
        }, [])

    return(
        <div>
            <Header />
            <div>
                <div className="main-box">
                    <Link className="header-text" to="/players/list">List</Link><span className="header-text"> | </span><Link className="header-text" to="/players/addplayer">Add Player</Link>
                    <div>
                    {loaded && (
                    <table className="table-box">
                        <thead className="table-heading">
                            <tr>
                                <th>Player Name</th>
                                <th>Preferred Position</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            playerList.map((player, index)=>{
                                return (
                                <tr key={index}>
                                    <td>{player.playerName}</td>
                                    <td>{player.prefPosition}</td>
                                    <td id="delete-button">
                                        <Delete
                                            playerId={player._id}
                                            playerList={playerList}
                                            setPlayerList={setPlayerList}
                                        />
                                    </td>
                                </tr>
                                )})
                            }
                        </tbody>
                    </table>
                    )}
                </div>
                </div>
            </div>        
        </div>
    )
}

export default PlayerList;