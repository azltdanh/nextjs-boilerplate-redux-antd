import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { Avatar, Button, Menu, Dropdown } from 'antd';
import {
  UserOutlined,
  ProfileOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const SubMenu = ({ user }) => {
  const router = useRouter();
  return (
    <Menu>
      <Menu.Item disabled>{user?.email}</Menu.Item>
      <Menu.Item
        icon={<ProfileOutlined />}
        key="/profile"
        onClick={() => router.push('/profile')}
      >
        Profile
      </Menu.Item>
      <Menu.Item
        icon={<SettingOutlined />}
        key="/setting"
        onClick={() => router.push('/setting')}
      >
        Setting
      </Menu.Item>
      <Menu.Item
        icon={<LogoutOutlined />}
        key="/log-out"
        onClick={() => router.push('/log-out')}
      >
        Log out
      </Menu.Item>
    </Menu>
  );
};

const AppMenuUser = () => {
  const [session] = useSession();
  const router = useRouter();

  return (
    <>
      {!session && (
        <>
          <Button type="default" size="small" onClick={signIn}>
            SIGN IN
          </Button>
          <Button
            type="default"
            size="small"
            onClick={() => router.push('/sign-up')}
          >
            SIGN UP
          </Button>
        </>
      )}
      {session && (
        <>
          <Dropdown
            overlay={<SubMenu user={session.user} />}
            placement="bottomRight"
          >
            <Avatar icon={<UserOutlined />} />
          </Dropdown>
        </>
      )}
    </>
  );
};

export default AppMenuUser;
