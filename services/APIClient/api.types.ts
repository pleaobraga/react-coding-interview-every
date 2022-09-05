import { AxiosResponse } from 'axios';

import { PeopleData, CompanyData } from '../../constants/types';

export interface PersonAPI {
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly birthday: string;
  readonly phone: string;
  readonly gender: string;
  readonly website: string;
  readonly image: string;
  readonly address: AddressAPI;
}

export interface CompanyAPI {
  readonly name: string;
  readonly email: string;
  readonly var: string;
  readonly phone: string;
  readonly country: string;
  readonly website: string;
  readonly image: string;
  readonly contact: PersonAPI;
  readonly addresses: AddressAPI[];
}

export interface AddressAPI {
  readonly street: string;
  readonly streetName: string;
  readonly buildingNumber: string;
  readonly city: string;
  readonly zipcode: string;
  readonly country: string;
  readonly county_code: string;
  readonly latitude: number;
  readonly longitude: number;
}

export interface APIData<T> {
  status: string;
  code: number;
  total: number;
  data: T;
}

export type APIGetPeopleType = AxiosResponse<PeopleData>;
export type APIGetCompanyHistory = AxiosResponse<CompanyData>;
