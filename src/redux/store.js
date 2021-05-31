import {createStore, applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';

import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {fetchCollectionsStart} from './shop/shop.sagas';

import rootReducer from './root-reducer'

const sagaMiddleWare = createSagaMiddleware()

const middlewares = [sagaMiddleWare];

if(process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(fetchCollectionsStart)

export const persistor = persistStore(store)

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };