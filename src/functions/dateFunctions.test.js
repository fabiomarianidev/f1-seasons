import { getTodayDate, getCurrentYear, formatDate } from "./dateFunctions";

describe("checking the return format", () => {
    test("getCurrentYear", () => {
        expect(getCurrentYear()).toEqual(2021);
    })

    test("formatDate function", () => {
        expect(formatDate("2019-04-28")).toEqual("April 28, 2019");
    })
})