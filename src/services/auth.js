import api from './api';

export const signIn = async ({ email, password }) => {
  const resp = await api.get(`/users?email=${email}&password=${password}`);
  return resp.data[0];
};

export const signOut = async (payload) => {
  const resp = await api.post('/sign-out', payload).catch(() => ({})); // mock api
  return resp.data;
};

export const signUp = async (payload) => {
  const resp = await api.post('/users', payload);
  return resp.data;
};
