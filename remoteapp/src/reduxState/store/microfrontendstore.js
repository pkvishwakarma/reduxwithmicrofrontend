import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import counterReducer from './microfrontendslicer/countslicer';

const Store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
  }),
});

export { Store };
export const RootState = Store.getState;
export const AppDispatch = Store.dispatch;
export const useAppDispatch = () => AppDispatch=useDispatch;