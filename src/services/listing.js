import api from './api';

export const getAllListingIds = async () => {
  const resp = await api.get('/listing');
  return resp.data.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));
};

export const getListing = async ({ page = 1, sort = 'id', order = 'asc' }) => {
  const resp = await api.get(
    `/listing?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`
  );
  return resp.data;
};

export const getListingDetails = async (id) => {
  const resp = await api.get(`/listing/${id}`);
  return resp.data;
};
