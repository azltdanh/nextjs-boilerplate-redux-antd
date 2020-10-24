import AppMenuUser from './AppMenuUser';

const mockHistoryPush = jest.fn();

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    pathname: '/',
    push: mockHistoryPush,
  }),
}));

describe(AppMenuUser.name, () => {
  it('renders', () => {
    const wrapper = shallow(<AppMenuUser />);
    expect(wrapper).toMatchSnapshot();

    // const items = wrapper.find('MenuItem');
    // expect(items.length).toEqual(3);

    // items.at(0).simulate('click');
    // expect(mockHistoryPush).toHaveBeenCalledWith('/log-in');

    // items.at(1).simulate('click');
    // expect(mockHistoryPush).toHaveBeenCalledWith('/log-out');

    // items.at(2).simulate('click');
    // expect(mockHistoryPush).toHaveBeenCalledWith('/sign-up');
  });
});
