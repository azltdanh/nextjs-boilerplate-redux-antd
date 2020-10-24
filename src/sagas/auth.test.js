import { runSaga } from 'redux-saga';
import * as authServices from '@services/auth';
import { AUTH } from '@reducers/auth';
import { mockResp, mockError } from '@mock/promise';
import { signInSaga, signOutSaga, signUpSaga } from './auth';

describe('signInSaga', () => {
  it('signInSaga should call api and dispatch success action', async () => {
    const signInSpy = jest
      .spyOn(authServices, 'signIn')
      .mockImplementation(() => Promise.resolve(mockResp.data));

    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      signInSaga,
      []
    );

    expect(signInSpy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: AUTH.SIGN_IN_REQUEST_SUCCESS, payload: mockResp.data },
    ]);
    signInSpy.mockClear();
  });

  it('signInSaga should call api and dispatch error action', async () => {
    const signInSpy = jest
      .spyOn(authServices, 'signIn')
      .mockImplementation(() => Promise.reject(mockError));

    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      signInSaga,
      []
    );

    expect(signInSpy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: AUTH.SIGN_IN_REQUEST_FAILURE, payload: mockError },
    ]);
    signInSpy.mockClear();
  });
});

describe('signOutSaga', () => {
  it('signOutSaga should call api and dispatch success action', async () => {
    const signOutSpy = jest
      .spyOn(authServices, 'signOut')
      .mockImplementation(() => Promise.resolve(mockResp.data));

    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      signOutSaga,
      []
    );

    expect(signOutSpy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: AUTH.SIGN_OUT_REQUEST_SUCCESS, payload: mockResp.data },
    ]);
    signOutSpy.mockClear();
  });

  it('signOutSaga should call api and dispatch error action', async () => {
    const signOutSpy = jest
      .spyOn(authServices, 'signOut')
      .mockImplementation(() => Promise.reject(mockError));

    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      signOutSaga,
      []
    );

    expect(signOutSpy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: AUTH.SIGN_OUT_REQUEST_FAILURE, payload: mockError },
    ]);
    signOutSpy.mockClear();
  });
});

describe('signUpSaga', () => {
  it('signUpSaga should call api and dispatch success action', async () => {
    const signUpSpy = jest
      .spyOn(authServices, 'signUp')
      .mockImplementation(() => Promise.resolve(mockResp.data));

    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      signUpSaga,
      []
    );

    expect(signUpSpy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: AUTH.SIGN_UP_REQUEST_SUCCESS, payload: mockResp.data },
    ]);
    signUpSpy.mockClear();
  });

  it('signUpSaga should call api and dispatch error action', async () => {
    const signUpSpy = jest
      .spyOn(authServices, 'signUp')
      .mockImplementation(() => Promise.reject(mockError));

    const dispatched = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      signUpSaga,
      []
    );

    expect(signUpSpy).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([
      { type: AUTH.SIGN_UP_REQUEST_FAILURE, payload: mockError },
    ]);
    signUpSpy.mockClear();
  });
});
