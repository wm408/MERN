import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import CreateAuthor from './components/CreateAuthor';
import UpdateAuthor from './components/UpdateAuthor';
import Error from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <h1>Favorite authors</h1>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<CreateAuthor />} path="/new" />
          <Route element={<UpdateAuthor />} path="/edit/:id" />
          <Route element={<Error />} path="*" />
        </Routes>
      </div>
     
    </BrowserRouter>
    
  );
}

export default App;
