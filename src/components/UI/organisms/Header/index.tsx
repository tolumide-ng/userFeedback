import * as React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../../atoms/Button";

export const Header = () => {
    const location = useLocation();

    const pageTitles: Record<string, string> = {
        home: "Feedback Form",
        comments: "Feedback Results",
    };

    let headerTitle = React.useRef(pageTitles["home"]);

    // React.useEffect(() => {
    //     const name: string = location.pathname.split("/")[1];
    //     headerTitle.current = pageTitles[name];
    // }, [location]);

    return (
        <header>
            <h1>{headerTitle.current}</h1>
            {/* <Button text="" /> */}
        </header>
    );
};
