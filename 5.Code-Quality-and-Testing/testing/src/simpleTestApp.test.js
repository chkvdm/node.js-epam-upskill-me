const startServer = require("./simpleTestApp");
const supertest = require("supertest");

let app;

beforeAll(async () => {
  app = await startServer();
});

afterAll(function (done) {
  app.close(done);
});

describe("simpleTestApp", function () {
  it("should return empty list if tasks not exists", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).toEqual(200);
    expect(response.body).toEqual([]);
  });

  it("a 400 status code should be returned if the task form failed validation", async () => {
    const newTask = {
      description: "description",
    };
    const response = await supertest(app).post("/").send(newTask);
    expect(response.status).toEqual(400);
  });

  it("a 200 status code must be return if task create success", async () => {
    const newTask = {
      title: "title",
      description: "description",
    };
    const response = await supertest(app).post("/").send(newTask);
    expect(response.status).toEqual(200);
  });

  it("should return the created task", async () => {
    const response = await supertest(app).get("/");
    expect(response.status).toEqual(200);
    expect(response.body[0].title).toEqual("title");
    expect(response.body[0].description).toEqual("description");
  });
});
