import { useRouter } from 'next/router';
import { Menu } from 'antd';

const AppMenu = () => {
  const router = useRouter();

  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['/']}
      selectedKeys={[router.pathname]}
    >
      <Menu.Item
        key="/how-it-works"
        onClick={() => router.push('/how-it-works')}
      >
        HOW IT WORKS
      </Menu.Item>
      <Menu.Item key="/about-us" onClick={() => router.push('/about-us')}>
        ABOUT US
      </Menu.Item>
      <Menu.Item key="/blogs" onClick={() => router.push('/blogs')}>
        BLOGS
      </Menu.Item>
      <Menu.Item key="/contact-us" onClick={() => router.push('/contact-us')}>
        CONTACT US
      </Menu.Item>
      <Menu.Item key="/listing" onClick={() => router.push('/listing')}>
        LISTING
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;
