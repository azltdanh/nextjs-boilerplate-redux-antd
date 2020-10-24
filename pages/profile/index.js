import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import { signIn } from '@reducers/auth';
import { wrapper } from '@store';
import mockUser from '@mock/user';

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const payload = {
    email: mockUser.email,
    password: mockUser.password,
  };

  if (!store.getState().auth.data) {
    store.dispatch(signIn(payload));
    store.dispatch(END);
  }

  await store.sagaTask.toPromise();
});

const Profile = () => {
  const user = useSelector((state) => state.auth.data);

  return (
    <section>
      <h2>{user && `${user.id}.${user.fullname}`}</h2>
    </section>
  );
};

export default Profile;
