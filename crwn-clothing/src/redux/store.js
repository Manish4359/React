import { createStore, applyMiddleware } from "redux";

import {persistStore} from 'redux-persist';

import logger from "redux-logger";

import persistedRootReducer from "./root-reducer";



const middlewares = [];

if(process.env.NODE_ENV==='development'){
     middlewares.push(logger);

}



export const store = createStore(persistedRootReducer, applyMiddleware(...middlewares));

export const persistor=persistStore(store)

export default {store,persistor};
