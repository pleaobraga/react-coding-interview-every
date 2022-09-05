export interface BasePerson {
  readonly name: string;
  readonly email: string;
  readonly birthday: string;
  readonly phone: string;
  readonly gender: string;
  readonly website: string;
  readonly image: string;
}

export interface Person extends BasePerson {
  readonly id: string;
  readonly address: Address;
  readonly companyHistory?: Company[];
}

export interface Company {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly var: string;
  readonly phone: string;
  readonly country: string;
  readonly website: string;
  readonly image: string;
  readonly mainAddress: Address;
}

export interface Address {
  readonly fullStreetName: string;
  readonly buildingNumber: string;
  readonly city: string;
  readonly zipCode: string;
  readonly country: string;
  readonly countyCode: string;
  readonly latitude: number;
  readonly longitude: number;
}

export const DISPLAY_MODE_CARD = 'card' as const;
export const DISPLAY_MODE_LIST_ITEM = 'item' as const;
const DISPLAY_MODE_VALUES = [
  DISPLAY_MODE_CARD,
  DISPLAY_MODE_LIST_ITEM,
] as const;
export type SettingsDisplayMode = typeof DISPLAY_MODE_VALUES[number];

interface Data<T> {
  data: T[];
  totalItems: number;
}

export type PeopleData = Data<Person>;
export type CompanyData = Data<Company>;
