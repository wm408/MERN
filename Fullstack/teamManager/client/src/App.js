import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route default element={<PlayerList />} path="/players/list" />
          <Route element={<AddPlayer />} path="/players/addplayer" />
          {/* <Route element={<PlayerStatus />} path="/status/game/:id" /> */}
          {/* <Route element={<Error />} path="*" /> */}
        </Routes>

      </div>
    </BrowserRouter>
    
  );
}

export default App;
