import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [theme, setTheme] = useState("dark");
    const colorTheme = theme === "light" ? "dark" : "light";
    // React.useEffect(() => {
    //     const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    //     if (isDark) {
    //         setTheme("dark");
    //     } else {
    //         setTheme("light");
    //     }
    // }, []);

    useEffect(() => {
        const root = document.querySelector("html");
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        root.setAttribute("data-theme", theme);
    }, [theme, colorTheme]);
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    return [colorTheme, toggleTheme];
};

export default function Header() {
    const [colorTheme, toggleTheme] = useDarkMode();
    useEffect(() => {
        onhashchange = () => {
            const hash = window.location.hash;
            document.getElementById(hash).scrollIntoView({
                behavior: "smooth",
            });
        };
        window.addEventListener("hashchange", onhashchange);
        return () => {
            window.removeEventListener("hashchange", onhashchange);
        };
    }, []);
    return (
        <div className="navbar fixed z-50 bg-base-100 shadow-lg  px-12 xl:px-12 max-w-[100vw]">
            <div className="navbar-start">
                <a href="#home" className="btn btn-ghost  normal-case text-xl">
                    Hữu Hoàng's Portfolio
                </a>
            </div>
            <div className="navbar-end ">
                <ul className="menu menu-horizontal gap-x-2 font-semibold text-xl px-1 hidden lg:flex">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li tabIndex={0}>
                        <a href="#about-me">About me</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <button
                    id="theme-toggle"
                    type="button"
                    onClick={toggleTheme}
                    className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                >
                    <svg
                        id="theme-toggle-dark-icon"
                        className={`w-5 h-5 ${colorTheme === "dark" ? "" : "hidden"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg
                        id="theme-toggle-light-icon"
                        className={`w-5 h-5  ${colorTheme === "light" ? "" : "hidden"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li tabIndex={0}>
                            <a className="justify-between">Parent</a>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
