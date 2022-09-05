import { useCallback, useEffect, useState } from 'react';
import { Person } from '../../constants/types';

import APIClient from '../../services/APIClient';
import { usePeopleContext } from '../contexts/People.context';

export const usePersonInformation = (email: string, startInLoading = false) => {
  const [error, setError] = useState();
  const { data: peopleData, edit } = usePeopleContext();
  const [loading, setLoading] = useState(startInLoading);
  const [data, setData] = useState<Person>(
    peopleData.find((person) => person.email === email)
  );

  const load = async () => {
    if (data && !data.companyHistory) {
      setLoading(true);
      try {
        const resp = await APIClient.getPersonCompayHistory();
        const newData = { ...data, companyHistory: resp.data };
        setData(newData);
        edit(newData);
      } catch (err) {
        setError(error);
      }
    }
    setLoading(false);
  };

  const save = async (newData) => {
    try {
      setData(newData);
      await edit(newData);
    } catch (err) {
      setError(error);
    }
  };

  return { data, load, save, error, loading };
};
