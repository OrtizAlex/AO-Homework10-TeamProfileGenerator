const Employee = require("../lib/Employee");



describe("Employee", () => {
  describe("getName", () => {
    it("should return name of employee", () => {
        const testEmployee = new Employee("John Smith", "123", "email@email.com");
        const name = "John Smith";
        
        const result = testEmployee.getName();

        
        expect(result).toEqual(name);
    });
  });

  describe("getId", () => {
    it("should return ID of employee", () => {
        const testEmployee = new Employee("John Smith", "123", "email@email.com");
        const id = "123";

        const result = testEmployee.getId();

        
        expect(result).toEqual(id);
    });
  });

  describe("getEmail", () => {
    it("should return email of employee", () => {
        const testEmployee = new Employee("John Smith", "123", "email@email.com");
        const email = "email@email.com";

        const result = testEmployee.getEmail();

        
        expect(result).toEqual(email);
    });
  });

  describe("getRole", () => {
    it("should return role of employee", () => {
        const testEmployee = new Employee("John Smith", "123", "email@email.com");
        const role = "Employee";

        const result = testEmployee.getRole();

        
        expect(result).toEqual(role);
    });
  });
});
