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

    it("should return false if password is less than 4", function() {
        let main = new Main();
        expect(main.passwordChecker("456")).toBe(false);
    });

    it("should return false if password is less than 5", function() {
        let main = new Main();
        expect(main.passwordChecker("4567")).toBe(false);
    });

    it("should return false if password is less than 6", function() {
        let main = new Main();
        expect(main.passwordChecker("47894")).toBe(false);
    });
    
    it("should return false if password is less than 7", function() {
        let main = new Main();
        expect(main.passwordChecker("412345")).toBe(false);
    });

    it("should return false if password is less than 8", function() {
        let main = new Main();
        expect(main.passwordChecker("4123456")).toBe(false);
    });
});