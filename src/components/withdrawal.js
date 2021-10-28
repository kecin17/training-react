import React, { useState, useEffect } from 'react';

function Withdrawal({balance, setBalance}) {
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <div>
      <p>Mau tarik?</p>
      <button onClick={() => setBalance(balance - 1000)}>
        Tarik seribu
      </button>
    </div>
  );
}

export default Withdrawal