import Axios from 'axios';

import { CompanyData, PeopleData } from '../../constants/types';
import { transformPerson, transformCompany } from './transformers';
import { APIGetCompanyHistory, APIGetPeopleType } from './api.types';
import server from './server';

const AxiosInstance = Axios.create({
  baseURL: 'https://fakerapi.it/api/v1',
  timeout: 2000,
});

interface GetPeopleParams {
  quantity?: number;
  page?: number;
}

class APIClient {
  async getPeopleInfo({
    quantity = 20,
    page = 0,
  }: GetPeopleParams = {}): Promise<PeopleData> {
    // const { data } = await AxiosInstance.get<any, APIGetPeopleType>(
    //   `/persons?_quantity=${quantity}`,
    //   {
    //     transformResponse: [
    //       ...(Axios.defaults.transformResponse as []),
    //       transformPerson,
    //     ],
    //   }
    // );
    // return { data }
    const { data: totalData } = await server.get();
    const data = totalData.slice(page * quantity, (page + 1) * quantity);
    return { data, totalItems: totalData.length };
  }

  // It should receive an email param. For now is not used
  // but in a normal scenario it would
  async getPersonCompayHistory(): Promise<CompanyData> {
    // We ask for a random number of companies
    const quantity = Math.floor(Math.random() * 5) + 1;
    const { data } = await AxiosInstance.get<any, APIGetCompanyHistory>(
      `/companies?_quantity=${quantity}`,
      {
        transformResponse: [
          ...(Axios.defaults.transformResponse as []),
          transformCompany,
        ],
      }
    );
    return data;
  }
}

export default new APIClient();
