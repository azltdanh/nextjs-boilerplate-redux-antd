import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Form, Input, Select, message } from 'antd';
import { signUp } from '@reducers/auth';
import { ButtonSubmit } from '@components/common';

const formItemLayout = {
  labelCol: {
    xs: { span: 0 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 64 }}>
      <Select.Option value="1">+1</Select.Option>
      <Select.Option value="84">+84</Select.Option>
    </Select>
  </Form.Item>
);

const SignUpPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    dispatch(signUp(values));
  };

  const validatePwdConfirm = ({ getFieldValue }) => ({
    validator(rule, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The two passwords do not match!'));
    },
  });

  useEffect(() => {
    /* istanbul ignore else */
    if (auth.data?.id) {
      message.success('User signed up successfully!');
      router.push('/');
    }
  }, [auth, router]);

  return (
    <Form
      {...formItemLayout}
      className="app-form"
      form={form}
      onFinish={handleSubmit}
      initialValues={{
        prefix: '1',
      }}
      requiredMark={false}
      scrollToFirstError
    >
      <Form.Item
        name="fullname"
        label="Full name"
        rules={[
          {
            required: true,
            message: 'Please input your full name!',
          },
        ]}
      >
        <Input placeholder="Full name" />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: 'email',
            required: true,
            message: 'Please input your valid email!',
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Confirm password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          validatePwdConfirm,
        ]}
      >
        <Input.Password placeholder="Confirm password" />
      </Form.Item>
      <Form.Item {...tailFormItemLayout} className="btn-wrapper">
        <ButtonSubmit loading={auth.loading}>Sign Up</ButtonSubmit>
      </Form.Item>
    </Form>
  );
};

export default SignUpPage;
