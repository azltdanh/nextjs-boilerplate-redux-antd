import { useSelector } from 'react-redux';
import * as authReducers from '@reducers/auth';
import * as authServices from '@services/auth';
import mockUser from '@mock/user';
import Profile, { getStaticProps } from '.';

// mock router history
const mockHistoryPush = jest.fn();
jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    pathname: '/',
    push: mockHistoryPush,
  }),
}));

// mock redux store
const mockUseSelector = (mockedStore) => {
  useSelector.mockImplementation((callback) => callback(mockedStore));
};
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe(Profile.name, () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('getStaticProps do call signIn first time', async () => {
    const signInActionSpy = jest.spyOn(authReducers, 'signIn');
    const signInServiceSpy = jest
      .spyOn(authServices, 'signIn')
      .mockImplementation(() => Promise.resolve(mockUser));
    const staticProps = await getStaticProps();
    expect(signInActionSpy).toHaveBeenCalledTimes(1);
    expect(signInServiceSpy).toHaveBeenCalledTimes(1);
    expect(staticProps.props.initialState.auth.data).toEqual(mockUser);
  });

  it('getStaticProps not call signIn second time', async () => {
    const signInActionSpy = jest.spyOn(authReducers, 'signIn');
    const staticProps = await getStaticProps();
    expect(signInActionSpy).toHaveBeenCalledTimes(0);
    expect(staticProps.props.initialState.auth.data).toEqual(mockUser);
  });

  it('renders', () => {
    const mockStore = {
      auth: { ...authReducers.initialState, data: { ...mockUser } },
    };
    mockUseSelector(mockStore);
    expect(shallow(<Profile />)).toMatchSnapshot();
  });
});
