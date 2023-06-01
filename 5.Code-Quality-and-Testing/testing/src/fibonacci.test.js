const getFibonacci = require("./fibonacci");

describe("fibonacci", function () {
  it("should return 17 fibonacci sequence", () => {
    expect(getFibonacci(10)).toEqual(55);
  });

  it("should return 37 fibonacci sequence", () => {
    expect(getFibonacci(20)).toEqual(6765);
  });

  it("should return 0 fibonacci sequence if n = 0", () => {
    expect(getFibonacci(0)).toEqual(0);
  });

  it("should return 1 fibonacci sequence if n = 1", () => {
    expect(getFibonacci(1)).toEqual(1);
  });

  it("should return 0 if n is a boolean", () => {
    expect(getFibonacci(true)).toEqual(0);
  });
});
