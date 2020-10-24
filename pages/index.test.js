import { useSelector } from 'react-redux';
import * as authReducers from '@reducers/auth';
import mockUser from '@mock/user';
import Home from '.';

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

describe(Home.name, () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    const mockStore = {
      auth: { ...authReducers.initialState, data: { ...mockUser } },
    };
    mockUseSelector(mockStore);
    expect(shallow(<Home />)).toMatchSnapshot();
  });
});
