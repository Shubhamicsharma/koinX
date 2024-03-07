import React from 'react';

import './App.css';
import NavbarComponent from './components/Navbar'; // Import NavbarComponent if it's defined in a separate file
import ContainerComponent from './components/containerComponent'; // Import NavbarComponent if it's defined in a separate file

function App() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <ContainerComponent/>
    </React.Fragment>
  );
}

export default App;
