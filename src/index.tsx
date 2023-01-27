import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./components/Pages/Home";
import { ContextProvider } from "./components/store";
import { PageWrapper } from "./components/UI/templates/PageWrapper";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageWrapper />,
        // errorElement: <></>,
        children: [
            { path: "", id: "home", element: <HomePage /> },
            { path: "/comments", id: "comments", element: <>I am here now</> },
        ],
    },
]);

root.render(
    <React.StrictMode>
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    </React.StrictMode>,
);
