import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCount
} from '../reducers/cashReducer'

function Balance() {
  const count = useSelector(selectCount)

  return (
    <div className="px-6 py-4">
      <p>Saldo Anda : <span className="text-2xl font-bold">{count}</span></p>
      <hr></hr>
    </div>
  );
}

export default Balance