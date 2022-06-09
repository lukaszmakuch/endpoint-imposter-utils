const waitForExpect = require("wait-for-expect");
const fetch = require("node-fetch");

function makeEndpointImposterCommunicationInterface({
  url,
  sessionId,
  prefix,
}) {
  const release = async (releaseKey) => {
    await waitForExpect(async () => {
      expect(
        (
          await fetch(
            `${url}/admin/release?session=${sessionId}&key=${releaseKey}`
          )
        ).status
      ).toBe(200);
    });
  };

  const expectOk = async (path) => {
    await waitForExpect(async () => {
      expect(
        (await fetch(`${url}/${sessionId}/${prefix}/${path}`)).status
      ).toBe(200);
    });
  };

  return {
    release,
    expectOk,
  };
}

module.exports = {
  makeEndpointImposterCommunicationInterface,
};
