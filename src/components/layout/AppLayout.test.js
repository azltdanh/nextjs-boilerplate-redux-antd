import AppLayout from './AppLayout';

describe(AppLayout.name, () => {
  it('renders', () => {
    const wrapper = shallow(<AppLayout />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with props', () => {
    const wrapper = shallow(<AppLayout title="Title" />);
    expect(wrapper).toMatchSnapshot();
  });
});
