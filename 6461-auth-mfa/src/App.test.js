const { Auth } = require("@aws-amplify/auth");

const config = {
  region: "us-east-1",
  userPoolId: "us-east-1_XwCtI74P2",
  userPoolWebClientId: "6oo6oaolb68ci7o2nv3ai19tcs",
};

Auth.configure(config);

describe("authenticateUser", () => {
  it("why is this failing?", async () => {
    const username = "chris";
    const password = "Hello123";

    const result = await Auth.signIn(username, password);
    console.log(result);
  });
});
