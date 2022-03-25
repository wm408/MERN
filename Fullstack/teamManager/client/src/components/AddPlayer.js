import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const AddPlayer = () => {

    // const [ playerList, setPlayerList ] = useState({});
    const [ playerName, setPlayerName ] = useState('');
    const [ prefPosition, setPrefPosition ] = useState('');
    // const [ playerStatus, setPlayerStatus ] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/team-manager', {
            playerName,
            prefPosition,
        })
            .then(res => {
                console.log(res);
                console.log(res.data)
                // setPlayerList([...playerList, res.data])
                navigate('/players/list');
            })
            .catch((err)=>{
                console.log(err)
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    

    return(
        <div>
            <Header />
            <div>
                <div className="main-box">
                    <Link className="header-text" to="/players/list">List</Link><span className="header-text"> | </span><Link className="header-text" to="/players/addplayer">Add Player</Link>
                    <div className="player-box">
                        <h1 className="left-pad">Add Player</h1>
                        <form onSubmit={onSubmitHandler}>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="td-text-right"><label className="input-label">Player Name:</label><br/></td>
                                            <td>
                                            <input className="input-field" type="text" onChange={(e)=>setPlayerName(e.target.value)} value={playerName}/>
                                            {
                                                errors.playerName?
                                                <span className="red-text"><br/>{errors.playerName.message}</span>
                                                :null
                                            }
                                            </td>
                                        </tr>
                                        <tr id="table-child">
                                            <td className="td-text-right"><label className="input-label">Preferred Position:</label><br/></td>
                                            <td>
                                            <input className="input-field" type="text" onChange={(e)=>setPrefPosition(e.target.value)} value={prefPosition}/>
                                            {
                                                errors.prefPosition?
                                                <span className="red-text"><br/>{errors.prefPosition.message}</span>
                                                :null
                                            }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <input className="submit-button" value="Add" type="submit"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPlayer;