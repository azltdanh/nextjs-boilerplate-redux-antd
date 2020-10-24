import ButtonSubmit from './ButtonSubmit';

describe(ButtonSubmit.name, () => {
  it('renders', () => {
    const wrapper = shallow(<ButtonSubmit>Submit</ButtonSubmit>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with props', () => {
    const wrapper = shallow(
      <ButtonSubmit className="css-class" loading>
        Submit
      </ButtonSubmit>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
