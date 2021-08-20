import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AdminRole {
  SUPERADMIN = "SUPERADMIN",
  COMPANYADMIN = "COMPANYADMIN",
  MANAGER = "MANAGER"
}



export declare class Admin {
  readonly id: string;
  readonly userID?: string;
  readonly role?: AdminRole | keyof typeof AdminRole;
  readonly companyID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Admin>);
  static copyOf(source: Admin, mutator: (draft: MutableModel<Admin>) => MutableModel<Admin> | void): Admin;
}

export declare class NewCourse {
  readonly id: string;
  readonly title?: string;
  readonly programID?: string;
  readonly description?: string;
  readonly skillTags?: (string | null)[];
  readonly majorSkill?: string;
  readonly modelAnswerLink?: string;
  readonly videoLink?: string;
  readonly bannerImgLink?: string;
  readonly Instructor?: Instructor;
  readonly instructorID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<NewCourse>);
  static copyOf(source: NewCourse, mutator: (draft: MutableModel<NewCourse>) => MutableModel<NewCourse> | void): NewCourse;
}

export declare class Instructor {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly jobTitle?: string;
  readonly companyID?: string;
  readonly profileImg?: string;
  readonly profileBanner?: string;
  readonly slugTitle?: string;
  readonly programs?: (ProgramInstructor | null)[];
  readonly courses?: (CourseInstructor | null)[];
  readonly description?: string;
  readonly linkedin?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Instructor>);
  static copyOf(source: Instructor, mutator: (draft: MutableModel<Instructor>) => MutableModel<Instructor> | void): Instructor;
}

export declare class ProgramInstructor {
  readonly id: string;
  readonly program: Program;
  readonly instructor: Instructor;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<ProgramInstructor>);
  static copyOf(source: ProgramInstructor, mutator: (draft: MutableModel<ProgramInstructor>) => MutableModel<ProgramInstructor> | void): ProgramInstructor;
}

export declare class Program {
  readonly id: string;
  readonly title?: string;
  readonly slugTitle?: string;
  readonly category?: string;
  readonly programLogo?: string;
  readonly programBanner?: string;
  readonly Courses?: (Course | null)[];
  readonly companyID?: string;
  readonly Company?: Company;
  readonly description?: string;
  readonly introVideoCode?: string;
  readonly finalVideoCode?: string;
  readonly ProgramInstructors?: (ProgramInstructor | null)[];
  readonly NewCourses?: (NewCourse | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Program>);
  static copyOf(source: Program, mutator: (draft: MutableModel<Program>) => MutableModel<Program> | void): Program;
}

export declare class Course {
  readonly id: string;
  readonly title?: string;
  readonly courseNo?: number;
  readonly slugTitle?: string;
  readonly programID?: string;
  readonly Instructors?: (CourseInstructor | null)[];
  readonly description?: string;
  readonly skillTags?: (string | null)[];
  readonly majorSkill?: string;
  readonly modelAnswer?: string;
  readonly videoCode?: string;
  readonly bannerImg?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Course>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course>) => MutableModel<Course> | void): Course;
}

export declare class CourseInstructor {
  readonly id: string;
  readonly course: Course;
  readonly instructor: Instructor;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<CourseInstructor>);
  static copyOf(source: CourseInstructor, mutator: (draft: MutableModel<CourseInstructor>) => MutableModel<CourseInstructor> | void): CourseInstructor;
}

export declare class Company {
  readonly id: string;
  readonly title?: string;
  readonly slugTitle?: string;
  readonly logoImg?: string;
  readonly bannerImg?: string;
  readonly Programs?: (Program | null)[];
  readonly website?: string;
  readonly description?: string;
  readonly category?: string;
  readonly logoWhite?: string;
  readonly Instructors?: (Instructor | null)[];
  readonly Admins?: (Admin | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Company>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

export declare class Task {
  readonly id: string;
  readonly isSubmitted?: boolean;
  readonly fileLink?: string;
  readonly Course?: Course;
  readonly User?: User;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Task>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

export declare class User {
  readonly id: string;
  readonly given_name?: string;
  readonly family_name?: string;
  readonly username?: string;
  readonly Enrolls?: (Enroll | null)[];
  readonly Settings?: Settings;
  readonly Certificates?: (Certificate | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Enroll {
  readonly id: string;
  readonly User?: User;
  readonly userID?: string;
  readonly programID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Enroll>);
  static copyOf(source: Enroll, mutator: (draft: MutableModel<Enroll>) => MutableModel<Enroll> | void): Enroll;
}

export declare class Settings {
  readonly id: string;
  readonly isEmailMarketingAgreed?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Settings>);
  static copyOf(source: Settings, mutator: (draft: MutableModel<Settings>) => MutableModel<Settings> | void): Settings;
}

export declare class Certificate {
  readonly id: string;
  readonly referenceID?: string;
  readonly userID?: string;
  readonly programID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Certificate>);
  static copyOf(source: Certificate, mutator: (draft: MutableModel<Certificate>) => MutableModel<Certificate> | void): Certificate;
}