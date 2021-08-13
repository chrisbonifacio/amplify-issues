/* Amplify Params - DO NOT EDIT
	API_CUSTOMRESOLVERTEST_GRAPHQLAPIENDPOINTOUTPUT
	API_CUSTOMRESOLVERTEST_GRAPHQLAPIIDOUTPUT
	AUTH_CUSTOMRESOLVERTEST2C0D2259_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");

exports.handler = async (event) => {
  const params = {
    TableName: "Todo-k6votjgiezb5jak7dn4nptzpg4-dev",
    Key: {
      id: event.arguments.id,
    },
  };
  const documentClient = new AWS.DynamoDB.DocumentClient();

  const data = await documentClient.get(params).promise();

  console.log(data);

  return {
    ...data.Item,
    description: `testing for ${data.Item.name}`,
  };
};
