const Engineer = require("../lib/Engineer");



describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return Github username of Engineer", () => {
        const testEngineer = new Engineer("John Smith", "123", "email@email.com", "username");
        const github = "username";

        const result = testEngineer.getGithub();

        
        expect(result).toEqual(github);
    });
  });

  describe("getRole", () => {
    it("should return role of Engineer", () => {
        const testEngineer = new Engineer("John Smith", "123", "email@email.com", "username");
        const role = "Engineer";

        const result = testEngineer.getRole();

        
        expect(result).toEqual(role);
    });
  });
});
