import { Button } from 'antd';

const ButtonSubmit = ({ className, loading, children }) => (
  <Button
    size="large"
    type="primary"
    htmlType="submit"
    block
    loading={loading}
    disabled={loading}
    className={className}
  >
    {children}
  </Button>
);

export default ButtonSubmit;
