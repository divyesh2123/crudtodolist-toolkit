import {call, put, takeEvery} from 'redux-saga/effects'
import { fetchUsers, fetchUsersSuccess } from '../slice/myuserslice'


function* asyncUsers()
{

    try
    {

      const user =  yield call(fetchUsers);

      console.log(user)

      yield put(fetchUsersSuccess(user));
    }
    catch
    {

    }

}


export function* watcherUsers()
{
    yield takeEvery('FETCH_USER',asyncUsers)
}