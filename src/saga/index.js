
import {all} from 'redux-saga/effects'
import { watcherUsers } from './myuser'
export function* rootSaga()
{

    yield all([watcherUsers()])
}