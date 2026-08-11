// A minimal stand-in for Next.js's (req, res) so API route handlers can be
// called directly in tests, without needing a running HTTP server.
function createMockReqRes({ method = 'GET', body = {}, query = {} } = {}) {
  const req = { method, body, query };
 
  const res = {
    statusCode: null,
    jsonData: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(data) {
      this.jsonData = data;
      return this;
    },
  };
 
  return { req, res };
}
 
module.exports = createMockReqRes;
