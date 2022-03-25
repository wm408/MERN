import React, { useState } from 'react';
import axios from 'axios';

const Delete = (props) => {

    const { playerId, playerList, setPlayerList } = props;
    // const [ playerNameToDelete, setPlayerNameToDelete ] = useState('');
    const [ loaded, setLoaded ] = useState(false);
    // const navigate = useNavigate();
    
    const deletePlayer = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/team-manager/${playerId}`);
            const name = res.data.playerName;
            const check = window.confirm(`Are you sure you want to remove ${name}?`)
            if (check) {
                let filteredPlayers = playerList.filter((singlePlayer)=>{ // also need to remove from state by using filter
                    return singlePlayer._id !== playerId;
                });
                setPlayerList(filteredPlayers);
                await axios.delete(`http://localhost:8000/api/team-manager/${playerId}`)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button onClick={deletePlayer}>Delete</button>
    )
}

export default Delete;