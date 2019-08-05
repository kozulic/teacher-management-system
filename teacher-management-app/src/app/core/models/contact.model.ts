import { Address } from './address.model';

export interface Contact extends ContactBase {
  email: string;
  phoneNumber: number;
  address: Address;
  student: string;
}

export interface ContactBase {
  _id: string;
  firstName: string;
  lastName: string;
  relationship: string;
}
