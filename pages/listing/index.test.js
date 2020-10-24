import * as listingServices from '@services/listing';
import mockListingItem from '@mock/listingItem';
import Listing, { getServerSideProps } from '.';

describe(Listing.name, () => {
  it('getServerSideProps', async () => {
    const getListingSpy = jest
      .spyOn(listingServices, 'getListing')
      .mockImplementation(() => Promise.resolve([mockListingItem]));
    const staticProps = await getServerSideProps();
    expect(getListingSpy).toHaveBeenCalledTimes(1);
    expect(staticProps.props.allListing).toEqual([mockListingItem]);
  });

  it('renders', () => {
    const props = {
      allListing: [mockListingItem],
    };
    const wrapper = shallow(<Listing {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
