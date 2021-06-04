const Intern = require("../lib/Intern");



describe("Intern", () => {
  describe("getSchool", () => {
    it("should return school of Intern", () => {
        const testIntern = new Intern("John Smith", "123", "email@email.com", "school");
        const school = "school";

        const result = testIntern.getSchool();

        
        expect(result).toEqual(school);
    });
  });

  describe("getRole", () => {
    it("should return role of Intern", () => {
        const testIntern = new Intern("John Smith", "123", "email@email.com", "username");
        const role = "Intern";
        
        const result = testIntern.getRole();

        
        expect(result).toEqual(role);
    });
  });
});
