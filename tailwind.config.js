/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";
export default {
    mode: "jit",
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {},
    },
    plugins: [flowbite, daisyui, typography],
    daisyui: {
        styled: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        themes: ["light", "dark"],
    },
};
