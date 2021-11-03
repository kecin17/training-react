import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  decrementByAmount,
} from '../reducers/cashReducer'

function Withdrawal({balance, setBalance}) {
  const dispatch = useDispatch();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <div className="px-6 py-4">
      <p>Mau tarik?</p>
      <button onClick={() => {dispatch(decrementByAmount(Number(1000)))}} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Tarik seribu
      </button>
    </div>
  );
}

export default Withdrawal