import { signOut } from '@reducers/auth';
import SignOutPage from '.';

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
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

// mock timers
jest.useFakeTimers();

describe(SignOutPage.name, () => {
  it('renders', () => {
    expect(shallow(<SignOutPage />)).toMatchSnapshot();
  });

  it('should dispatch signOut', () => {
    const wrapper = mount(<SignOutPage />);

    expect(wrapper.text()).toEqual('Logging out...');
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(signOut());

    // Fast forward and exhaust only currently pending timers
    jest.runOnlyPendingTimers();

    // Fast-forward until all timers have been executed
    // jest.runAllTimers();

    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
