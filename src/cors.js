const { pathPrefix } = require("./pathPrefix");
const uniq = (items) => [...new Set(items).values()];

const allowAllOriginsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Headers": "*",
};
const optionsRequest = {
  request: { method: "OPTIONS" },
  response: {
    headers: allowAllOriginsHeaders,
    status: 200,
  },
};
const allowAllCORSOrigins = (mocks) => [
  optionsRequest,
  ...uniq(mocks.map(({ pathPrefix }) => pathPrefix)).map(
    (p) => pathPrefix(p, [optionsRequest])[0]
  ),
  ...mocks.map((mock) => {
    return {
      ...mock,
      response: {
        ...mock.response,
        headers: {
          ...(mock.response.headers || {}),
          ...allowAllOriginsHeaders,
        },
      },
    };
  }),
];

module.exports = { allowAllCORSOrigins };
