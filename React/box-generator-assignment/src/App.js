import './App.css';
import React, {useState} from 'react';
import BoxForm from './components/BoxForm';
import DisplayBox from './components/DisplayBox';

function App() {

  const [boxGroup, setBoxGroup] = useState([]);
  const [boxColor, setBoxColor] = useState("");
  const [widthHeight, setWidthHeight] = useState("");

  return (
    <div className="App">
      <BoxForm
        boxColor={boxColor}
        setBoxColor={setBoxColor}
        boxGroup={boxGroup}
        setBoxGroup={setBoxGroup}
        widthHeight={widthHeight}
        setWidthHeight={setWidthHeight}
      />
      <DisplayBox 
        boxGroup={boxGroup}
        boxColor={boxColor}
        widthHeight={widthHeight}
      />
    </div>
  );
}

export default App;
