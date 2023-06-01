import React from "react";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

function App() {
    React.useEffect(() => {
        AOS.init({
            duration: 1200,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="w-full  overflow-x-hidden h-full max-w-[100vw] flex flex-col gap-y-5 min-h-screen">
            <Header />
            <main className=" px-4 md:px-12">
                <Home />
                <AboutMe />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}

export default App;
