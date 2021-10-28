import React, { useState, useEffect } from 'react';

function Balance({balance}) {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `WOEEE`;
  });

  return (
    <div className="px-6 py-4">
      <p>Saldo Anda : <span className="text-2xl font-bold">{balance}</span></p>
      <hr></hr>
    </div>
  );
}

export default Balance