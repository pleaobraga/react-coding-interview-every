import 'antd/dist/antd.css';
import '../styles/globals.css';
import React from 'react';

import PeopleProvider from '../components/contexts/People.context';
import ErrorBoundary from '../components/atoms/ErrorBoundary';

const MyApp = ({ Component, pageProps }) => (
  <ErrorBoundary>
    <PeopleProvider>
      <Component {...pageProps} />
    </PeopleProvider>
  </ErrorBoundary>
);

export default MyApp;
