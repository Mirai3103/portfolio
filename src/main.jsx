import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
const App = React.lazy(() => {
    const result = import("./App.jsx");
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(result);
        }, 2000);
    });
    return promise;
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <React.Suspense fallback={<LoadingScreen />}>
            <App />
        </React.Suspense>
    </React.StrictMode>
);
