
import { useState } from 'react';
import './App.css';
import Tabs from './Tabs/Tabs';
import TabTwo from './Tabs/TabTwo.js';
import TabOne from './Tabs/TabOne.js';
import TabThree from './Tabs/TabThree.js';

function App() {

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Tabs setAciveTab={setActiveTab}/>
      {activeTab === 0 && <TabOne/>}
      {activeTab === 1 && <TabTwo/>}
      {activeTab === 2 && <TabThree/>}
      
    </div>
  );
}

export default App;
