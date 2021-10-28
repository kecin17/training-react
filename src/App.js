import './App.css';
import React, { useState } from 'react';
import Balance from './components/balance';
import Withdrawal from './components/withdrawal';
import Deposit from './components/deposit';

function App() {
  const [balance, setBalance] = useState(10000);

  return (
    <div className="App">
      <h2>Hello Everyone</h2>
      <Balance balance={balance} setBalance={setBalance}></Balance>
      <Withdrawal balance={balance} setBalance={setBalance}></Withdrawal>
      <Deposit balance={balance} setBalance={setBalance}></Deposit>
    </div>
  );
}

export default App;
