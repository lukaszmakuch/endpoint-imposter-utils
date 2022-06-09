module.exports = {
  scenario: (scenario, mocks) => mocks.map(mock => ({ ...mock, scenario })),
};
