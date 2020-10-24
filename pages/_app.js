import { Provider } from 'next-auth/client';
import { wrapper } from '@store';
import AppLayout from '@components/layout';

const App = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
};

export default wrapper.withRedux(App);
