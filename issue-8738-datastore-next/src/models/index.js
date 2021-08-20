// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AdminRole = {
  "SUPERADMIN": "SUPERADMIN",
  "COMPANYADMIN": "COMPANYADMIN",
  "MANAGER": "MANAGER"
};

const { Admin, NewCourse, Instructor, ProgramInstructor, Program, Course, CourseInstructor, Company, Task, User, Enroll, Settings, Certificate } = initSchema(schema);

export {
  Admin,
  NewCourse,
  Instructor,
  ProgramInstructor,
  Program,
  Course,
  CourseInstructor,
  Company,
  Task,
  User,
  Enroll,
  Settings,
  Certificate,
  AdminRole
};