import data from "../../data/courses.json";

// Numbers
const numItems = data.length;

describe("Number tests", () => {
  test("Number of items = 12", () => {
    expect(numItems).toBe(12);
  });

  test("Number of items to be greater than 12", () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
  });
});

// Strings
describe("String tests", () => {
  const dataTest = data[0].title;

  test("The title contains React", () => {
    expect(dataTest).toContain("React");
  });

  test("There is a JS in this title", () => {
    expect(dataTest).toMatch(/JS/);
  });
});

// Objects / arrays
describe("Arrays and Objects tests", () => {
  const data2 = ["React Native", "MeteorJS"];

  test("The list mentions React Native and MeteorJS", () => {
    expect(["React Native", "MeteorJS"]).toEqual(expect.arrayContaining(data2));
  });

  // Objects
  test("The first course to have property of Title", () => {
    expect(data[0]).toHaveProperty("title");
  });

  test("The first course to have property of views containing 31266", () => {
    expect(data[0]).toHaveProperty("views", "31,266");
  });
});
