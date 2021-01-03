import { getCurrentYear } from "./dateFunctions";

describe("checking the return format", () => {
    test("getCurrentYear", () => {
        expect(getCurrentYear()).toEqual(2021);
    })
})