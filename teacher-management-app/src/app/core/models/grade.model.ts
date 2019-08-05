export interface Grade extends GradeBase {
  date: Date;
  note: string;
  student: string;
}

export interface GradeBase {
  _id: string;
  subject: string;
  grade: number;
}
