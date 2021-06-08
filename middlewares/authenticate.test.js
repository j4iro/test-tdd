const authenticate = require("./authenticate");

describe("Middlewares", () => {
  describe("authenticate", () => {
    test("should have id 1", () => {
      //header va a devolver 1 si es llamado
      const req = {
        header: jest.fn().mockReturnValue(1),
      };
      //implementamos un espia para sendStatus
      const res = {
        sendStatus: jest.fn(),
      };
      //otro spia, next
      const next = jest.fn();

      authenticate(req, res, next);

      //esperamos que sea llamado con el argumento 'user_id'
      expect(req.header.mock.calls).toEqual([["user_id"]]);

      // que no se llame sendStatus
      expect(res.sendStatus.mock.calls).toEqual([]);

      // que si se llame next
      expect(next.mock.calls).toEqual([[]]);
    });

    test("should fail if user is not the one", () => {
      const req = {
        header: jest.fn().mockReturnValue(2),
      };
      const res = {
        sendStatus: jest.fn(),
      };
      const next = jest.fn();

      authenticate(req, res, next);

      expect(req.header.mock.calls).toEqual([["user_id"]]);
      expect(res.sendStatus.mock.calls).toEqual([[403]]);
      expect(next.mock.calls).toEqual([]);
    });
  });
});
