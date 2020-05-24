import * as MathUtils from "../math-utils.js";

describe("MathUtils", () => {
    describe("sum", () => {
        /**
         * This test fails because the spy never gets called even
         * though the `add` function in math-utils.js is getting
         * called.
         */
        it("should call add", () => {
            // Arrange
            const addSpy = jest.spyOn(MathUtils, "add");
            
            // Act
            const result = MathUtils.sum(1,2,3);

            // Assert
            expect(result).toEqual(6);
            expect(addSpy).toHaveBeenCalled();
        });
    });
});
