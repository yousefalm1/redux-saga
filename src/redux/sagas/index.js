import { all } from 'redux-saga/effects';
import watchFetchPosts from './users';

export default function* rootSaga() {
  yield all([watchFetchPosts()]);
}
