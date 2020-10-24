import AppLogo from './AppLogo';

describe(AppLogo.name, () => {
  it('renders', () => {
    const wrapper = shallow(<AppLogo />);
    expect(wrapper).toMatchSnapshot();
  });
});
