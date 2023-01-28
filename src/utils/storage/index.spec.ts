import { Storage } from ".";

describe("Storage", () => {
    it("should return reviews if there is one", () => {
        const setItemSpy = jest
            .spyOn(global.Storage.prototype, "getItem")
            .mockReturnValue(JSON.stringify([{}]));

        const allFeedback = Storage.reviews;

        expect(setItemSpy).toHaveBeenCalledTimes(1);
        expect(allFeedback).toHaveLength(1);
    });

    it("should return an empty array if there is no reviews", () => {
        const setItemSpy = jest
            .spyOn(global.Storage.prototype, "getItem")
            .mockReturnValue(null);

        const allFeedback = Storage.reviews;

        expect(setItemSpy).toHaveBeenCalledTimes(1);
        expect(allFeedback).toHaveLength(0);
    });

    it("should update the reviews in the store", () => {
        const getItemSpy = jest
            .spyOn(global.Storage.prototype, "setItem")
            .mockImplementation(() => {});

        Storage.reviews = [];
        expect(getItemSpy).toHaveBeenNthCalledWith(1, "allFeedback", "[]");
    });
});
