import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Project {
  readonly id: string;
  readonly name: string;
  readonly emails?: (Email | null)[];
  constructor(init: ModelInit<Project>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

export declare class Email {
  readonly id: string;
  readonly title: string;
  readonly language: string;
  readonly body: string;
  readonly project?: Project;
  constructor(init: ModelInit<Email>);
  static copyOf(source: Email, mutator: (draft: MutableModel<Email>) => MutableModel<Email> | void): Email;
}