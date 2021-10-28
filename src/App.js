import './App.css';
import React, { useState } from 'react';
import Balance from './components/balance';
import Withdrawal from './components/withdrawal';
import Deposit from './components/deposit';

function App() {
  const [balance, setBalance] = useState(10000);

  return (
    <div className="App max-w-sm rounded overflow-hidden shadow-lg text-lg justify-center">
      <h2 className="font-bold text-gray-500 text-xl mb-2">Hello Everyone</h2>
      <Balance balance={balance} setBalance={setBalance}></Balance>
      <Withdrawal balance={balance} setBalance={setBalance}></Withdrawal>
      <Deposit balance={balance} setBalance={setBalance}></Deposit>
    </div>
  );
}

export default App;
