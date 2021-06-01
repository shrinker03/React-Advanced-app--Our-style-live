import {call, all} from 'redux-saga/effects';

import {fetchCollectionsStart} from './shop/shop.sagas';

export default function* rootSaga() {
    yield all([call(fetchCollectionsStart)]);
}