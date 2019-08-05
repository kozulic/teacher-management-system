import { Teacher } from './teacher.model';

export interface AuthTeacher {
  teacher: Teacher;
  token: string;
}
