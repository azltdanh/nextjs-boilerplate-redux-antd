import { all, call, put, takeLatest } from 'redux-saga/effects';
import { signIn, signOut, signUp } from '@services/auth';
import { AUTH } from '@reducers/auth';

export function* signInSaga(action) {
  try {
    const data = yield call(signIn, action.payload);
    yield put({ type: AUTH.SIGN_IN_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: AUTH.SIGN_IN_REQUEST_FAILURE, payload: error });
  }
}

export function* signOutSaga(action) {
  try {
    const data = yield call(signOut, action.payload);
    yield put({ type: AUTH.SIGN_OUT_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: AUTH.SIGN_OUT_REQUEST_FAILURE, payload: error });
  }
}

export function* signUpSaga(action) {
  try {
    const data = yield call(signUp, action.payload);
    yield put({ type: AUTH.SIGN_UP_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: AUTH.SIGN_UP_REQUEST_FAILURE, payload: error });
  }
}

function* authSagas() {
  yield all([
    takeLatest(AUTH.SIGN_IN_REQUEST, signInSaga),
    takeLatest(AUTH.SIGN_OUT_REQUEST, signOutSaga),
    takeLatest(AUTH.SIGN_UP_REQUEST, signUpSaga),
  ]);
}

export default authSagas;
