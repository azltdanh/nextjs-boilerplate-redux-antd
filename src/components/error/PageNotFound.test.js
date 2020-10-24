import PageNotFound from './PageNotFound';

describe(PageNotFound.name, () => {
  it('renders', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
