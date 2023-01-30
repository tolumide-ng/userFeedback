import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CommentsPage } from "./components/Pages/Comments/Comments";
import { HomePage } from "./components/Pages/Home/Home";
import { ContextProvider } from "./components/store";
import { PageWrapper } from "./components/UI/templates/PageWrapper/PageWrapper";
import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <PageWrapper />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "/comments", element: <CommentsPage /> },
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
