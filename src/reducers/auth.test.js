import { HYDRATE } from 'next-redux-wrapper';
import { mockError } from '@mock/promise';
import mockUser from '@mock/user';
import reducer, { AUTH, initialState, signIn, signOut, signUp } from './auth';

describe('authenticate reducer', () => {
  it('returns the initial state', () => {
    expect(reducer()).toEqual(initialState);
  });

  // HYDRATE
  it('returns the hydrate state', () => {
    const payload = {
      auth: {
        data: 'mock data',
      },
    };
    expect(reducer(initialState, { type: HYDRATE, payload: payload })).toEqual({
      ...initialState,
      ...payload.auth,
    });
  });

  // SIGN_IN

  it('signIn', () => {
    expect(signIn(mockUser)).toEqual({
      type: AUTH.SIGN_IN_REQUEST,
      payload: { ...mockUser },
    });
  });

  it('handles sign-in request', () => {
    expect(reducer(initialState, { type: AUTH.SIGN_IN_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('handles sign-in failure', () => {
    expect(
      reducer(initialState, {
        type: AUTH.SIGN_IN_REQUEST_FAILURE,
        payload: { ...mockError },
      })
    ).toEqual({
      ...initialState,
      error: { ...mockError },
    });
  });

  it('handles sign-in success ', () => {
    expect(
      reducer(initialState, {
        type: AUTH.SIGN_IN_REQUEST_SUCCESS,
        payload: { ...mockUser },
      })
    ).toEqual({
      ...initialState,
      data: { ...mockUser },
    });
  });

  // SIGN_OUT

  it('signOut', () => {
    expect(signOut()).toEqual({
      type: AUTH.SIGN_OUT_REQUEST,
    });
  });

  it('handles sign-out request', () => {
    expect(reducer(initialState, { type: AUTH.SIGN_OUT_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('handles sign-out failure', () => {
    expect(
      reducer(initialState, {
        type: AUTH.SIGN_OUT_REQUEST_FAILURE,
        payload: { ...mockError },
      })
    ).toEqual({
      ...initialState,
      error: { ...mockError },
    });
  });

  it('handles sign-out success ', () => {
    expect(
      reducer(initialState, {
        type: AUTH.SIGN_OUT_REQUEST_SUCCESS,
      })
    ).toEqual({
      ...initialState,
    });
  });

  // SIGN_UP

  it('signUp', () => {
    expect(signUp(mockUser)).toEqual({
      type: AUTH.SIGN_UP_REQUEST,
      payload: { ...mockUser },
    });
  });

  it('handles sign-up request', () => {
    expect(reducer(initialState, { type: AUTH.SIGN_UP_REQUEST })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('handles sign-up failure', () => {
    expect(
      reducer(initialState, {
        type: AUTH.SIGN_UP_REQUEST_FAILURE,
        payload: { ...mockError },
      })
    ).toEqual({
      ...initialState,
      error: { ...mockError },
    });
  });

  it('handles sign-up success ', () => {
    expect(
      reducer(initialState, {
        type: AUTH.SIGN_UP_REQUEST_SUCCESS,
        payload: { ...mockUser },
      })
    ).toEqual({
      ...initialState,
      data: { ...mockUser },
    });
  });
});
