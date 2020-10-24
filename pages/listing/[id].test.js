import * as listingServices from '@services/listing';
import mockListingItem from '@mock/listingItem';
import ListingItem, { getStaticPaths, getStaticProps } from './[id]';

describe(ListingItem.name, () => {
  const mockPath = { params: { id: '1' } };
  it('getStaticPaths', async () => {
    const getAllListingIdsSpy = jest
      .spyOn(listingServices, 'getAllListingIds')
      .mockImplementation(() => Promise.resolve([mockPath]));
    const staticPaths = await getStaticPaths();
    expect(getAllListingIdsSpy).toHaveBeenCalledTimes(1);
    expect(staticPaths.paths).toEqual([mockPath]);
  });

  it('getStaticProps', async () => {
    const getListingDetailsSpy = jest
      .spyOn(listingServices, 'getListingDetails')
      .mockImplementation(() => Promise.resolve(mockListingItem));
    const staticProps = await getStaticProps(mockPath);
    expect(getListingDetailsSpy).toHaveBeenCalledTimes(1);
    expect(staticProps.props.listingItem).toEqual(mockListingItem);
  });

  it('renders', () => {
    const props = {
      listingItem: { ...mockListingItem },
    };
    const wrapper = shallow(<ListingItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
