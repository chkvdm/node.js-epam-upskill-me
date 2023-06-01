const findText = require("./findText");
const getFileContent = require("./getFileContent");

jest.mock("./getFileContent", () => {
  return jest.fn();
});

describe("findText", function () {
  afterEach(() => {
    getFileContent.mockReset();
  });

  it("should rerurn true if file content contains textToFind", async () => {
    getFileContent.mockResolvedValue("This is some someText content.");

    const filePath = "path/file";
    const textToFind = "someText";
    const result = await findText(filePath, textToFind);

    expect(getFileContent).toHaveBeenCalledWith(filePath);
    expect(result).toBe(true);
  });

  it("should return to false if file content not contains textToFind", async () => {
    getFileContent.mockResolvedValue("This is some someText content.");

    const filePath = "path/file";
    const textToFind = "nothing";
    const result = await findText(filePath, textToFind);

    expect(getFileContent).toHaveBeenCalledWith(filePath);
    expect(result).toBe(false);
  });

  it("should reject if error", async () => {
    const error = new Error("Async error message");
    getFileContent.mockRejectedValue(error);

    const filePath = "path/file";
    const textToFind = "nothing";

    await expect(findText(filePath, textToFind)).rejects.toThrow(error);
    expect(getFileContent).toHaveBeenCalledWith(filePath);
  });
});
