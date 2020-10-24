import AppLoading from './AppLoading';

describe(AppLoading.name, () => {
  it('renders', () => {
    const wrapper = shallow(<AppLoading />);
    expect(wrapper).toMatchSnapshot();
  });
});
