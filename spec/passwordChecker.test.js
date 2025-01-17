import { Main } from "../src/passwordChecker.js";

describe("Check password", function() {

    it("should return false if password is empty", function() {
        let main = new Main();
        expect(main.passwordChecker("")).toBe(false);
    });

   it("should return false if password is less than 2", function() {
        let main = new Main();
        expect(main.passwordChecker("4")).toBe(false);
    });

    it("should return false if password is less than 3", function() {
        let main = new Main();
        expect(main.passwordChecker("44")).toBe(false);
    });

    
});