import React, { useState, useEffect } from 'react';
import Balance from './balance';
import Withdrawal from './withdrawal';
import Deposit from './deposit';

function CashContainer() {
    const [balance, setBalance] = useState(10000);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Cash Menu`;
    });

    return (
        <div className="App max-w-sm rounded overflow-hidden shadow-lg text-lg justify-center">
            <h2 className="font-bold text-gray-500 text-xl mb-2">Hello Everyone</h2>
            <Balance balance={balance} setBalance={setBalance}></Balance>
            <Withdrawal balance={balance} setBalance={setBalance}></Withdrawal>
            <Deposit balance={balance} setBalance={setBalance}></Deposit>
        </div>
    );
}

export default CashContainer