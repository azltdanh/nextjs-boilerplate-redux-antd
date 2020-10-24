import { Row, Col, Button } from 'antd';
import { getAllListingIds, getListingDetails } from '@services/listing';

export const getStaticPaths = async () => {
  const paths = await getAllListingIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const listingItem = await getListingDetails(params.id);
  return {
    props: {
      listingItem: listingItem,
    },
  };
};

const ListingItem = ({ listingItem }) => {
  const layoutWrap = {
    xs: 24,
    md: 12,
  };

  const itemWrap = {
    span: 12,
  };

  return (
    <article>
      <img src={listingItem.images[0]} alt={listingItem.title} width={360} />
      <h1>{listingItem.title}</h1>
      <Row>
        <Button type="primary" htmlType="submit" block>
          ĐẶT XE
        </Button>
      </Row>
      <Row>
        <Col {...layoutWrap}>ĐẶC ĐIỂM</Col>
        <Col {...layoutWrap}>
          <Row>
            <Col {...itemWrap}>Số ghế: {listingItem.seats}</Col>
            <Col {...itemWrap}>Truyền động: {listingItem.type}</Col>
            <Col {...itemWrap}>Nhiên liệu: {listingItem.fuel}</Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col {...layoutWrap}>MÔ TẢ</Col>
        <Col {...layoutWrap}>{listingItem.desc}</Col>
      </Row>
    </article>
  );
};

export default ListingItem;
