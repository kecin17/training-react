import React, { useState, useEffect } from 'react';

function Deposit({balance, setBalance}) {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `WOEEE`;
  });

  return (
    <div>
      <p>Mau tambah saldo?</p>
      <button onClick={() => setBalance(balance + 1000)}>
        Tambah seribu
      </button>
      <button onClick={() => setBalance(balance + 5000)}>
        Tambah goceng
      </button>
      <hr></hr>
    </div>
  );
}

export default Deposit