// Put your code below this line.
import { withSSRContext, Auth } from "aws-amplify";
import { NextApiRequest, NextApiResponse } from "next";

import awsconfig from "../../src/aws-exports";

export const confirmUser = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const auth = withSSRContext({ req }).Auth as typeof Auth;

  let user;

  try {
    user = await auth.currentAuthenticatedUser();
  } catch (error) {
    console.log("error", error);
    res.statusCode = 401;
    res.redirect("http://localhost:3000?error=true");
  }

  if (user.attributes.email_verified === "true") {
    res.statusCode = 200;
    res.redirect("http://localhost:3000?confirmed=true");
    res.end();
  } else {
    res.statusCode = 401;
    res.redirect("http://localhost:3000?error=true");
  }
};

export default confirmUser;
