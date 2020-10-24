import { Row, Col, Button } from 'antd';

const ButtonPayment = ({ className, loading, total, sub, text, children }) => (
  <Row className={className}>
    <Col span={10}>
      <div className="sub-total">
        <b>{total}</b>
        <small>{sub}</small>
      </div>
    </Col>
    <Col span={14}>
      <Button
        size="large"
        type="default"
        htmlType="submit"
        block
        loading={loading}
        disabled={loading}
      >
        {text}
        {!text && children}
      </Button>
    </Col>
  </Row>
);

export default ButtonPayment;
