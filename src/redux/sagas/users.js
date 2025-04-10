import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchUsers } from '../../api/users';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from '../types/users';

function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsers);
    yield put({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
}

export default function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}
