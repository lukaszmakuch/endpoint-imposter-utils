module.exports = {
  pathPrefix: (pathPrefix, mocks) => mocks.map(mock => ({ ...mock, pathPrefix })),
};
