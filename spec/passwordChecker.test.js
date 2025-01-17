import { Main } from "../src/passwordChecker";

describe("Check password", function() {

    it("should return false if password is empty", function() {
        let main = new Main();
        expect(main.passwordChecker("")).toBe(false);
    });

});