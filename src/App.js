import React from 'react';
import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Contacts from './components/Contacts';

function App() {
  let name = "Gholi";
  let showHello = true;
  let showBold = false;
  let headerTag

  if (showBold) {
    headerTag = <h1>Hello {name}</h1>;
  } else {
    headerTag = <h6>Hello {name}</h6>;
  }

  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <div className="container">
        {showHello ? headerTag : null}
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
