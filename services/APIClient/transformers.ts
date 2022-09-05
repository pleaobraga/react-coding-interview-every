import { AxiosTransformer } from 'axios';

import {
  Address,
  CompanyData,
  PeopleData,
  Person,
} from '../../constants/types';
import { APIData, PersonAPI, CompanyAPI, AddressAPI } from './api.types';

const TOTAL_ITEMS_PERSON = 1000;

const singleAddressTransform = ({
  street,
  streetName,
  county_code,
  zipcode,
  ...address
}: AddressAPI): Address => ({
  countyCode: county_code,
  fullStreetName: street,
  zipCode: zipcode,
  ...address,
});

const singlePersonTransform = ({
  firstname,
  lastname,
  address,
  email,
  ...personAPI
}: PersonAPI): Person => ({
  ...personAPI,
  email,
  id: email,
  address: singleAddressTransform(address),
  name: `${firstname} ${lastname}`,
});

const takeFirst = ([first]: any[] = []) => first;

export const transformPerson: AxiosTransformer = ({
  data,
}: APIData<PersonAPI[]>): PeopleData => {
  const transformedData = data.map(singlePersonTransform);
  return { data: transformedData, totalItems: TOTAL_ITEMS_PERSON };
};

export const transformCompany: AxiosTransformer = ({
  data,
}: APIData<CompanyAPI[]>): CompanyData => {
  const transformedData = data.map(
    ({ name, addresses = [], contact, ...company }) => ({
      id: name,
      name,
      // contactInfo: singlePersonTransform(contact),
      mainAddress: singleAddressTransform(takeFirst(addresses) || {}),
      ...company,
    })
  );
  return { data: transformedData, totalItems: transformedData.length };
};
