import React from "react";

export default function LoadingScreen() {
    React.useEffect(() => {
        window.location.hash = "";
    }, []);
    return (
        <div id="loading-wrapper">
            <div id="loading-text">LOADING</div>
            <div id="loading-content"></div>
        </div>
    );
}
