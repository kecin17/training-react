import React, { useState, useEffect } from 'react';

function Deposit({balance, setBalance}) {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `WOEEE`;
  });

  return (
    <div className="px-6 py-4">
      <p>Mau tambah saldo?</p>
      <button onClick={() => setBalance(balance + 1000)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Tambah seribu
      </button>
      <button onClick={() => setBalance(balance + 5000)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Tambah goceng
      </button>
      <hr></hr>
    </div>
  );
}

export default Deposit