import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  incrementByAmount,
} from '../reducers/cashReducer'

function Deposit() {
  const dispatch = useDispatch();

  return (
    <div className="px-6 py-4">
      <p>Mau tambah saldo?</p>
      <button onClick={() => {dispatch(incrementByAmount(Number(1000)))}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Tambah seribu
      </button>
      <button onClick={() => {dispatch(incrementByAmount(Number(5000)))}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Tambah goceng
      </button>
      <hr></hr>
    </div>
  );
}

export default Deposit