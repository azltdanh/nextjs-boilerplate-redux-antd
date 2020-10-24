import { useSelector } from 'react-redux';
import { initialState, signIn } from '@reducers/auth';
import mockUser from '@mock/user';
import { Form } from 'antd';
import SignInPage from '.';

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

// mock timers
jest.useFakeTimers();

describe(SignInPage.name, () => {
  let wrapper;

  beforeEach(() => {
    mockDispatch.mockClear();
    const mockStore = { auth: { ...initialState } };
    mockUseSelector(mockStore);
    wrapper = mount(<SignInPage />);
  });

  it('renders', () => {
    expect(shallow(<SignInPage />)).toMatchSnapshot();
  });

  it('dispatch signIn success', () => {
    const formValues = {
      fullname: mockUser.fullname,
      prefix: mockUser.prefix,
      phone: mockUser.phone,
      email: mockUser.email,
      password: '1',
      confirm: '1',
    };
    const appForm = wrapper.find(Form);
    appForm.props().form.setFieldsValue({ ...formValues });

    wrapper
      .find('input#email')
      .simulate('change', { target: { value: mockUser.email } });
    wrapper
      .find('input#password')
      .simulate('change', { target: { value: '1' } });
    wrapper.find('form').simulate('submit');
    appForm.props().onFinish(formValues);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(signIn(formValues));
  });

  it('redirect when user is signed in', () => {
    const mockStore = { auth: { ...initialState, data: { ...mockUser } } };
    mockUseSelector(mockStore);
    mount(<SignInPage />);
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
