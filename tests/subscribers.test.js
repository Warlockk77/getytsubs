const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

const string = `mongodb+srv://warlockk:gabru123@cluster0.1yrferc.mongodb.net/?retryWrites=true&w=majority`;

beforeEach(async () => {
  await mongoose.connect(string);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /", () => {
  it("SHOULD BE RETR]URNING INDEX.HMTL ", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.header["content-type"]).toBe("text/html; charset=UTF-8");
  });
});

describe("GET /subscribers", () => {
  it("SHOULD RETURN ARRAY OF SUBS ", async () => {
    const res = await request(app).get("/subscribers");
    expect(res.statusCode).toBe(200);
  });
});

describe("GET /subscribers/names", () => {
  it("SHOULD RETURN SUBS AND SUBSCRIBED CHANNEL NAMES ", async () => {
    const res = await request(app).get("/subscribers/names");
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
