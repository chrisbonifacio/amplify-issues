const { Auth } = require("aws-amplify");

const config = {
  region: "us-east-1",
  userPoolId: "us-east-1_IzMAmpq5g",
  userPoolWebClientId: "38lpisndpijalfrgiplvtv7e4k",
};

Auth.configure(config);

test("sign up", async () => {
  const username = "test";
  const email = "christopher.bonifacio@gmail.com";
  const password = "pass1234";
  await Auth.signUp({
    username,
    password,
    attributes: { email },
  });
});

test("sign in", async () => {
  const username = "test";
  const password = "pass1234";
  const user = await Auth.signIn({ username, password });
  console.log({ user });
});

test("confirm", async () => {
  const username = "test";
  const code = "495281";
  await Auth.confirmSignUp(username, code);
});
