// import { createStore, applyMiddleware,compose } from "redux";
// import thunk from "redux-thunk"
// import reducers from '../reducers'

// const store = createStore(
//     reducers,
//     {},
//     compose( applyMiddleware(thunk))
// )

// export default store;
// ======================================================
import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './../features/basketSlice'
export const store = configureStore({
 
  reducer: {
    basket: basketReducer,
  },
})

