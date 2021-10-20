const express = require("express");
const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const axios = require("axios").default;

const app = express();
const port = 8000;

const poolData = {
  UserPoolId: "us-east-1_8r58f61q3",
  ClientId: "6p6oq7rc95oufibolsdumf42mo",
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.post("/user", (req, res) => {
  const { username, password, attributes } = req.body;

  const attributeList = [];

  const dataEmail = {
    Name: "email",
    Value: attributes.email,
  };

  const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
    dataEmail
  );

  attributeList.push(attributeEmail);

  userPool.signUp(
    username,
    password,
    attributeList,
    null,
    function (error, result) {
      if (error) {
        return res
          .status(400)
          .json({ error: error.message || JSON.stringify(error) });
      } else {
        return res.status(200).json({ result });
      }
    }
  );
});

app.put("/user", async (req, res) => {
  // update user attributes
  const { username, attributes } = req.body;

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
    Username: username,
    Pool: userPool,
  });

  const attributeList = [];

  const attributePhone = new AmazonCognitoIdentity.CognitoUserAttribute({
    Name: "phone_number",
    Value: attributes.phone_number,
  });

  attributeList.push(attributePhone);

  await new Promise((res) => cognitoUser.getSession(res));

  cognitoUser.updateAttributes(attributeList, function (error, result) {
    if (error) {
      return res
        .status(400)
        .json({ error: error.message || JSON.stringify(error) });
    } else {
      return res.status(200).json({ result });
    }
  });
});

app.post("/confirm-user", (req, res) => {
  const { username, code } = req.body;

  const userData = {
    Username: username,
    Pool: userPool,
  };

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  console.log(cognitoUser);

  cognitoUser.confirmRegistration(code, true, function (error, result) {
    if (error) {
      return res
        .status(400)
        .json({ error: error.message || JSON.stringify(error) });
    } else {
      return res.status(200).json({ result });
    }
  });
});

app.post("/sign-in", async (req, res) => {
  const { username, password } = req.body;

  const cognitoUser = new AmazonCognitoIdentity.CognitoUser({
    Username: username,
    Pool: userPool,
  });

  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
    {
      Username: username,
      Password: password,
    }
  );

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      const refreshToken = result.getRefreshToken().getToken();

      console.log(refreshToken);

      return axios
        .post(
          "https://acij.auth.us-east-1.amazoncognito.com/oauth2/token",
          {
            grant_type: "refresh_token",
            client_id: "6p6oq7rc95oufibolsdumf42mo",
            refreshToken,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => res.status(200).json({ oauth2token }))
        .catch((err) => res.status(400).json({ error: err.message }));
    },
    onFailure: function (error) {
      return res
        .status(400)
        .json({ error: error.message || JSON.stringify(error) });
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
