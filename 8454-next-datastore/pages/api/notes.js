import { withSSRContext } from "aws-amplify";
import { createPrivateNote } from "../../src/graphql/mutations";
import { PrivateNote } from "../../src/models";

export default async function handler(req, res) {
  const data = JSON.parse(req.body);

  const { Auth, API, DataStore } = withSSRContext({ req });

  const user = await Auth.currentAuthenticatedUser();
  console.log(user);

  const result = await DataStore.save(new PrivateNote(data));
  /*
  [WARN] 29:28.207 DataStore - User is unauthorized to query syncTasks with auth mode AMAZON_COGNITO_USER_POOLS. No data could be returned.
  */

  // const result = await API.graphql({
  //   query: createPrivateNote,
  //   variables: {
  //     input: data,
  //   },
  // });
  /* 
  {
    content: "user input from client"
    id: "071fc0b0-ca1a-4beb-86a0-46edcd62306e"
  }
   */

  console.log(result);

  res.json(result);
}
