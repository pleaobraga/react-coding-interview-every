import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { usePeopleContext } from '../contexts/People.context';

export const withContextInitialized = (Component) => (props) => {
  const { initialized: initializedPeople } = usePeopleContext();
  const router = useRouter();

  useEffect(() => {
    if (!initializedPeople) router.push('/');
  }, [initializedPeople]);

  return <Component {...props} />;
};
