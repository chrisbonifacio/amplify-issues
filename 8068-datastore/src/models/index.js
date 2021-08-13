// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Project, Email } = initSchema(schema);

export {
  Project,
  Email
};