import './App.css';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <UserForm
      firstName={""}
      lastName={""}
      emailAddress={""}
      password={""}
      confirmPassword={""}
      />
    </div>
  );
}

export default App;
