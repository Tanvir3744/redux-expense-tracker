import React from 'react';
import './App.css';
import Balance from './components/Balance';
import Form from './components/Form';
import Transations from './components/Transations';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>
      <div className="main">
        <div className="container">
          <Balance />
          <Form />
          <Transations />
        </div>
      </div>
      {/* footer component */}
      <div className="footer">&copy;2022 Learn with Sumit</div>
    </div>
  );
}

export default App;
