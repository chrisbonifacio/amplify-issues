import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AthleteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Athlete {
  readonly id: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly teamID?: string;
  readonly phoneNumber?: string;
  readonly playerNumber?: number;
  readonly playerPosition?: string;
  readonly dateOfBirth?: string;
  readonly avatar?: string;
  readonly active?: boolean;
  readonly emoji?: string;
  readonly firstTouchSent?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Athlete, AthleteMetaData>);
  static copyOf(source: Athlete, mutator: (draft: MutableModel<Athlete, AthleteMetaData>) => MutableModel<Athlete, AthleteMetaData> | void): Athlete;
}