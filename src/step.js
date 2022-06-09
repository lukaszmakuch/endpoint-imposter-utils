module.exports = {
  step: (step, mocks) => mocks.map((mock) => ({ ...mock, step })),
};
