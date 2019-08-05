export interface ClassEdit extends Class {
  owner: string;
}

export interface Class extends ClassList {
  subjects: string[];
}

export interface ClassList extends ClassBase {
  _id: string;
}

export interface ClassBase {
  name: string;
  description: string;
}

export interface Subject {
  _id: string;
  subjects: string[];
}
