const errorRequest = message => {
  return {
    status: 500,
    message
  };
};
module.exports = {
  errorRequest
};
