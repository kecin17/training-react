// import { createStore } from 'redux'
// import rootReducer from './reducer'

// const store = createStore(rootReducer, undefined)

// export default store

import { configureStore } from '@reduxjs/toolkit';
import cashReducer from './reducers/cashReducer';

export default configureStore({
  reducer: {
    counter: cashReducer,
  },
});
