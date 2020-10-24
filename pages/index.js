import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.auth.data);

  return (
    <section>
      <h2>Home</h2>
      <h3>{user && `${user.id}.${user.fullname}`}</h3>
    </section>
  );
};

export default Home;
