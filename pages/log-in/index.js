import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Form, Input, message } from 'antd';
import { signIn } from '@reducers/auth';
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

const SignInPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    dispatch(signIn(values));
  };

  useEffect(() => {
    /* istanbul ignore else */
    if (auth.data?.id) {
      message.success('Signed-in successfully!');
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
      <Form.Item {...tailFormItemLayout} className="btn-wrapper">
        <ButtonSubmit loading={auth.loading}>Sign In</ButtonSubmit>
      </Form.Item>
    </Form>
  );
};

export default SignInPage;
