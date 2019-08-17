import { Address } from './address.model';

export interface Student extends StudentList {
  phoneNumber: number;
  address: Address;
  birthDate: Date;
  sex: string;
  globalNote: string;
  class: string;
  contacts: string[];
  grades: string[];
  notes: string[];
  absences: string[];
}

export interface StudentList extends StudentBase {
  _id: string;
}

export interface StudentBase {
  firstName: string;
  lastName: string;
  email: string;
}
