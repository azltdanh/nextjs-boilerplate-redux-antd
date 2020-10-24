import Head from 'next/head';
import { Layout, Row, Col } from 'antd';
import { APP_TITLE } from '@constants';
import AppLogo from './AppLogo';
import AppMenu from './AppMenu';
import AppMenuUser from './AppMenuUser';

import '@assets/main.less';

const AppLayout = ({ children, title = '' }) => {
  const pageTitle = `${APP_TITLE}${title ? ` - ${title}` : ''}`;
  return (
    <Layout className="app-layout">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="VIBE - A great start to every trip!"
        />
        <meta name="og:title" content={pageTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{pageTitle}</title>
      </Head>
      <Layout.Header>
        <Row className="app-header" justify="space-between">
          <Col>
            <Row>
              <Col>
                <AppLogo />
              </Col>
              <Col>
                <AppMenu />
              </Col>
            </Row>
          </Col>
          <Col>
            <AppMenuUser />
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content>
        <main className="app-content">{children}</main>
      </Layout.Content>
      <Layout.Footer className="app-footer">
        VIBE. All rights reserved. © Copyright 2020
      </Layout.Footer>
    </Layout>
  );
};

export default AppLayout;
