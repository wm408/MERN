import React, {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs';
import TabOutput from './components/TabOutput';

function App() {

  const tabDefinition = [
    {
      name: 'Tab 1',
      text: 'Tab 1 content is showing here'
    },
    {
      name: 'Tab 2',
      text: 'Tab 2 content is showing here'
    },
    {
      name: 'Tab 3',
      text: 'Tab 3 content is showing here'
    }
  ]

  const [tabArr, setTabArr] = useState(tabDefinition);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="App">
      <Tabs
        tabArr={tabArr}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabOutput 
        tabArr={tabArr} 
        activeTab={activeTab} 
      />
    </div>
  );
}

export default App;
