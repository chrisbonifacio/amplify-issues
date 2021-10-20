const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const axios = require("axios").default;

const app = express();
const port = 8000;

const poolData = {
  UserPoolId: "us-east-1_8r58f61q3",
  ClientId: "6p6oq7rc95oufibolsdumf42mo",
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
  Username: "christopher.bonifacio@gmail.com",
  Pool: userPool,
});

cognitoUser.authenticateUser(
  {
    Username: "christopher.bonifacio@gmail.com",
    Password: "Hello123",
  },
  function () {
    console.log("Authenticated!");
  }
);
