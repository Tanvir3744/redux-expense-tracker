import React from 'react';
import './App.css';
import Balance from './components/Balance';
import Form from './components/Form';
import { Layout } from './components/Layout';
import Transations from './components/Transations';

function App() {
  return (
    <Layout>
      <Balance />
      <Form />
      <Transations />
    </Layout>
  );
}

export default App;
