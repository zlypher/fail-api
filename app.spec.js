const request = require("supertest");
const app = require("./app");

describe("fail-api", () => {
    describe("General", () => {
        it("should not have a '/' route", () => {
            return request(app)
            .get("/")
            .then((response) => {
                expect(response.statusCode).toBe(404);
            });
        });
        
        it("should return 418 for non numeric code", () => {
            return request(app)
            .get("/fail/abc")
            .then((response) => {
                expect(response.statusCode).toBe(418);
            });
        });
    });

    describe("HTTP verbs", () => {
        it("should respond to GET requests", () => {
            return request(app)
                .get("/fail/401")
                .then((response) => {
                    expect(response.statusCode).toBe(401);
                });
        });

        it("should respond to POST requests", () => {
            return request(app)
                .post("/fail/401")
                .then((response) => {
                    expect(response.statusCode).toBe(401);
                });
        });

        it("should respond to PUT requests", () => {
            return request(app)
                .put("/fail/401")
                .then((response) => {
                    expect(response.statusCode).toBe(401);
                });
        });

        it("should respond to DELETE requests", () => {
            return request(app)
                .delete("/fail/401")
                .then((response) => {
                    expect(response.statusCode).toBe(401);
                });
        });
    });

    describe("HTTP status codes", () => {
        const testStatusCodes = [ 200, 304, 401, 402, 404, 500 ];

        testStatusCodes.map(code => {
            it(`should return ${code} for "/fail/${code}"`, () => {
                return request(app)
                    .get(`/fail/${code}`)
                    .then((response) => {
                        expect(response.statusCode).toBe(code);
                    });
            });
        });
    });
});