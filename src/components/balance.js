import React, { useState, useEffect } from 'react';

function Balance({balance}) {

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `WOEEE`;
  });

  return (
    <div>
      <p>Saldo Anda : {balance}</p>
      <hr></hr>
    </div>
  );
}

export default Balance