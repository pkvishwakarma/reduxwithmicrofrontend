import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

/*
NOTE: 
Here you take the interface of each slice and pass them into the `useStoreSelector` Hook in this way your `intellisense` will be aware of the federated types.
*/
const federatedSlices = {
  counter: await import("remoteapp/reduxState/store/microfrontendslicer/countslicer").then(
    (module) => module.default
  ),
};

const initStore = async () => {
  const Store = configureStore({
    reducer: combineReducers({
      ...federatedSlices,
    }),
  });
  return Store;
};

export default initStore;