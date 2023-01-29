import { act, renderHook } from "@testing-library/react";
import { useHome } from "./useHome";
import { Validator } from "../../../../utils/validator/validator";
import { MemoryRouter } from "react-router-dom";
import {
    UserFeedbackContext,
    UserFeedbackContextValue,
} from "../../../store/userFeedback";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate,
}));

describe("useHome", () => {
    it("should return data with the initialState on first mount", () => {
        const { result } = renderHook(() => useHome(), {
            wrapper: ({ children }) => {
                return <MemoryRouter>{children}</MemoryRouter>;
            },
        });

        expect(result.current.data.email.value).toBe("");
        expect(result.current.data.email.error).toBe("");
        expect(result.current.data.author.value).toBe("");
        expect(result.current.data.author.error).toBe("");
        expect(result.current.data.comment.value).toBe("");
        expect(result.current.data.comment.error).toBe("");
        expect(result.current.data.rating.value).toBe(0);
        expect(result.current.data.rating.error).toBe("");
    });

    it("should call Validator and update data when onChange is called", async () => {
        const error = "error Message";
        const validateSpy = jest
            .spyOn(Validator, "validate")
            .mockReturnValue(error);

        const event = {
            target: { name: "email", value: "emailAddy" },
        } as React.ChangeEvent<HTMLInputElement>;

        const { result } = renderHook(() => useHome(), {
            wrapper: ({ children }) => {
                return <MemoryRouter>{children}</MemoryRouter>;
            },
        });

        await act(async () => {
            result.current.onChange(event);
        });

        expect(validateSpy).toHaveBeenNthCalledWith(1, "email", "emailAddy");

        expect(result.current.data.email.value).toBe("emailAddy");
        expect(result.current.data.email.error).toBe(error);
        expect(result.current.data.author.value).toBe("");
        expect(result.current.data.author.error).toBe("");
        expect(result.current.data.comment.value).toBe("");
        expect(result.current.data.comment.error).toBe("");
        expect(result.current.data.rating.value).toBe(0);
        expect(result.current.data.rating.error).toBe("");
    });

    it("should return ratingOptions", () => {
        const { result } = renderHook(() => useHome(), {
            wrapper: ({ children }) => {
                return <MemoryRouter>{children}</MemoryRouter>;
            },
        });

        expect(result.current.ratingOptions).toMatchObject([1, 2, 3, 4, 5]);
    });

    it("should add the feedback to store and navigate when submit is called and there are no errors", async () => {
        const validateSpy = jest
            .spyOn(Validator, "validate")
            .mockReturnValue(null);
        const mockPreventDefault = jest.fn();
        const mockAddFeedback = jest.fn();

        const event = {
            preventDefault: mockPreventDefault,
        } as unknown as React.FormEvent;

        const value = {
            addFeedback: mockAddFeedback,
        } as unknown as UserFeedbackContextValue;

        const { result } = renderHook(() => useHome(), {
            wrapper: ({ children }) => {
                return (
                    <UserFeedbackContext.Provider value={value}>
                        <MemoryRouter>{children}</MemoryRouter>
                    </UserFeedbackContext.Provider>
                );
            },
        });

        await act(async () => {
            result.current.onSubmit(event);
        });

        expect(mockPreventDefault).toHaveBeenCalledTimes(1);
        expect(validateSpy).toHaveBeenCalledTimes(
            Object.keys(result.current.data).length,
        );
        expect(mockAddFeedback).toHaveBeenCalledTimes(1);
        expect(mockedUsedNavigate).toHaveBeenNthCalledWith(1, "/comments");
    });

    it("should not add the feedback to the store if all input are not valid", async () => {
        const validateSpy = jest
            .spyOn(Validator, "validate")
            .mockReturnValue("an error message");
        const mockPreventDefault = jest.fn();
        const mockAddFeedback = jest.fn();

        const event = {
            preventDefault: mockPreventDefault,
        } as unknown as React.FormEvent;

        const value = {
            addFeedback: mockAddFeedback,
        } as unknown as UserFeedbackContextValue;

        const { result } = renderHook(() => useHome(), {
            wrapper: ({ children }) => {
                return (
                    <UserFeedbackContext.Provider value={value}>
                        <MemoryRouter>{children}</MemoryRouter>
                    </UserFeedbackContext.Provider>
                );
            },
        });

        await act(async () => {
            result.current.onSubmit(event);
        });

        expect(mockPreventDefault).toHaveBeenCalledTimes(1);
        expect(validateSpy).toHaveBeenCalledTimes(
            Object.keys(result.current.data).length,
        );
        expect(mockAddFeedback).not.toHaveBeenCalled();
        expect(mockedUsedNavigate).not.toHaveBeenCalled();
    });
});
