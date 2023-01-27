import * as React from "react";
import { UserCommentsProvider } from "./userComments";

const providers = [UserCommentsProvider];

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
