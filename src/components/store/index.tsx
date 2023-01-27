import * as React from "react";
import { UserFeedbackProvider } from "./userFeedback";

const providers = [UserFeedbackProvider];

export const ContextProvider = ({ children }: React.PropsWithChildren) => (
    <>
        {providers.reduceRight(
            (acc, Provider) => (
                <Provider>{acc}</Provider>
            ),
            children,
        )}
    </>
);
