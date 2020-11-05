import { all, call } from 'redux-saga/effects';
import { watchUser } from 'bus/user/saga/watchers';

export function* rootSaga() {
    yield all([
        call(watchAuction),
        call(watchJackpot),
    ]);
}
