import React, {useState} from 'react';
import NavBar from './components/NavBar.js'
import FootNav from './components/FootNav'
import InfoPanel from './components/InfoPanel.js'
import './App.css';

function App() {
  const screenConfig = useState(0);
  return (
    <div>

      <NavBar />
      <InfoPanel />
      <FootNav screenConfig={screenConfig} />
    </div>
  );
}

export default App;
