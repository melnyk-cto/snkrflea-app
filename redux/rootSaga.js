import { spawn} from 'redux-saga/effects'
import authSaga from './auth/sagas'
import productsSaga from './products/sagas'
import storeSaga from './store/sagas'


export default function* rootSaga() {
        yield spawn(authSaga),
        yield spawn(productsSaga),
        yield spawn(storeSaga)
}