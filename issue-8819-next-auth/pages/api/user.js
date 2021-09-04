import { Amplify, withSSRContext } from "aws-amplify";
import awsconfig from "../../aws-exports.js";

Amplify.configure({ ...awsconfig, ssr: true });

export default async (req, res) => {
  const { Auth } = withSSRContext({ req });

  try {
    const user = await Auth.currentAuthenticatedUser();
    res.json({ user });
  } catch (error) {
    res.json({ error });
  }
};
