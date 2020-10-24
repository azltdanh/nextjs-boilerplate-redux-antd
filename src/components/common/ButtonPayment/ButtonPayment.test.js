import ButtonPayment from './ButtonPayment';

describe(ButtonPayment.name, () => {
  it('renders', () => {
    const wrapper = shallow(<ButtonPayment>Confirm</ButtonPayment>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders with props', () => {
    const wrapper = shallow(
      <ButtonPayment
        className="css-class"
        loading
        total="total"
        sub="sub"
        text="test"
      >
        Confirm
      </ButtonPayment>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
