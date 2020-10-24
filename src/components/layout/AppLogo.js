import Link from 'next/link';
import logo from 'public/logo.svg';

const AppLogo = () => {
  return (
    <Link href="/">
      <a>
        <img src={logo} alt="Logo" />
      </a>
    </Link>
  );
};

export default AppLogo;
