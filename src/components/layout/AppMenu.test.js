import AppMenu from './AppMenu';

const mockHistoryPush = jest.fn();

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => ({
    pathname: '/',
    push: mockHistoryPush,
  }),
}));

describe(AppMenu.name, () => {
  it('renders', () => {
    const wrapper = shallow(<AppMenu />);
    expect(wrapper).toMatchSnapshot();

    const items = wrapper.find('MenuItem');
    expect(items.length).toEqual(5);

    items.at(0).simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/how-it-works');

    items.at(1).simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/about-us');

    items.at(2).simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/blogs');

    items.at(3).simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/contact-us');

    items.at(4).simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/listing');
  });
});
