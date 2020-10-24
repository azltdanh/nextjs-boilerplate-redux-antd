import { useSelector } from 'react-redux';
import { initialState, signUp } from '@reducers/auth';
import mockUser from '@mock/user';
import { Form } from 'antd';
import SignUpPage from '.';

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

describe(SignUpPage.name, () => {
  let wrapper;

  beforeEach(() => {
    mockDispatch.mockClear();
    const mockStore = { auth: { ...initialState } };
    mockUseSelector(mockStore);
    wrapper = mount(<SignUpPage />);
  });

  it('renders', () => {
    expect(shallow(<SignUpPage />)).toMatchSnapshot();
  });

  it('dispatch signUp success', () => {
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
      .find('input#fullname')
      .simulate('change', { target: { value: mockUser.fullname } });
    wrapper
      .find('input#phone')
      .simulate('change', { target: { value: mockUser.phone } });
    wrapper
      .find('input#email')
      .simulate('change', { target: { value: mockUser.email } });
    wrapper
      .find('input#password')
      .simulate('change', { target: { value: '1' } });
    wrapper
      .find('input#confirm')
      .simulate('change', { target: { value: '2' } }) // trigger validate
      .simulate('change', { target: { value: '1' } });
    wrapper.find('form').simulate('submit');
    appForm.props().onFinish(formValues);

    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(signUp(formValues));
  });

  it('redirect when user is signed in', () => {
    const mockStore = { auth: { ...initialState, data: { ...mockUser } } };
    mockUseSelector(mockStore);
    mount(<SignUpPage />);
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
