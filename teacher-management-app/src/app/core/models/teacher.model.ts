export interface Teacher {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface TeacherLogin {
  email: string;
  password: string;
}

export interface TeacherRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
