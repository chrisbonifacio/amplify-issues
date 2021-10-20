exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 400,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify("Sending a test error for issue 8806"),
  };
  return response;
};
