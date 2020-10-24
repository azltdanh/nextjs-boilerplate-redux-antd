import Date from './Date';

describe(Date.name, () => {
  it('renders', () => {
    const wrapper = shallow(<Date dateString="2020-12-31" />);
    expect(wrapper).toMatchSnapshot();
  });
});
