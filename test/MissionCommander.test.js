const MissionCommander = require("../app/MissionCommander");

describe("Unit test for MissionComander class", () => {
    test('1) Create a MissionCommander objetc', () => {
      
       const myCommander = new MissionCommander("Woopa");

      expect(myCommander.name).toBe("Woopa");
    });
  })
  