import { HYDRATE } from 'next-redux-wrapper';

export const AUTH = {
  // SIGN_IN
  SIGN_IN_REQUEST: 'USER/SIGN_IN_REQUEST',
  SIGN_IN_REQUEST_SUCCESS: 'USER/SIGN_IN_REQUEST_SUCCESS',
  SIGN_IN_REQUEST_FAILURE: 'USER/SIGN_IN_REQUEST_FAILURE',
  // SIGN_OUT
  SIGN_OUT_REQUEST: 'USER/SIGN_OUT_REQUEST',
  SIGN_OUT_REQUEST_SUCCESS: 'USER/SIGN_OUT_REQUEST_SUCCESS',
  SIGN_OUT_REQUEST_FAILURE: 'USER/SIGN_OUT_REQUEST_FAILURE',
  // SIGN_UP
  SIGN_UP_REQUEST: 'USER/SIGN_UP_REQUEST',
  SIGN_UP_REQUEST_SUCCESS: 'USER/SIGN_UP_REQUEST_SUCCESS',
  SIGN_UP_REQUEST_FAILURE: 'USER/SIGN_UP_REQUEST_FAILURE',
};

export const signIn = (payload) => ({
  type: AUTH.SIGN_IN_REQUEST,
  payload,
});

export const signOut = () => ({
  type: AUTH.SIGN_OUT_REQUEST,
});

export const signUp = (payload) => ({
  type: AUTH.SIGN_UP_REQUEST,
  payload,
});

export const initialState = {
  loading: false,
  data: null,
  error: null,
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case HYDRATE: {
      return {
        ...state,
        ...action.payload.auth, // pick the 'auth' only
      };
    }
    case AUTH.SIGN_IN_REQUEST:
    case AUTH.SIGN_OUT_REQUEST:
    case AUTH.SIGN_UP_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case AUTH.SIGN_IN_REQUEST_SUCCESS:
    case AUTH.SIGN_UP_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    }
    case AUTH.SIGN_OUT_REQUEST_SUCCESS: {
      return {
        ...initialState,
      };
    }
    case AUTH.SIGN_IN_REQUEST_FAILURE:
    case AUTH.SIGN_OUT_REQUEST_FAILURE:
    case AUTH.SIGN_UP_REQUEST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default auth;
