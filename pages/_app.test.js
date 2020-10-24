import App from './_app';
import PageNotFound from './404';

// mock router history
const mockHistoryPush = jest.fn();
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    pathname: '/',
    push: mockHistoryPush,
  }),
}));

describe('App', () => {
  it('renders', () => {
    const props = {
      Component: PageNotFound,
      pageProps: {},
    };
    const wrapper = mount(<App {...props} />);
    expect(wrapper.find(PageNotFound)).toMatchSnapshot();
  });
});
