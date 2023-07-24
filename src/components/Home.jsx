import { useMediaQuery } from "usehooks-ts";
import BannerIMG from "../assets/banner.png";
import { useEffect, useRef } from "react";
export default function Home(props) {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const ref = useRef(null);
    useEffect(() => {
        if (isDesktop) {
            ref.current.style.backgroundImage = ``;
        } else {
            ref.current.style.backgroundImage = `url(${BannerIMG})`;
            ref.current.style.backgroundSize = `270px 150px`;
            ref.current.style.backgroundRepeat = `no-repeat`;
            // position botton 40px
            // right 0px
            ref.current.style.backgroundPosition = `bottom right `;
        }
    }, [isDesktop]);

    return (
        <div id="#home" className="flex mb-[25vh]  max-w-5xl mx-auto gap-x-20 justify-evenly min-h-[68vh]" {...props}>
            <div className="md:w-1/2 w-full flex flex-col justify-end " data-aos="zoom-in-down">
                <div className="flex flex-col gap-4 md:gap-2 relative" ref={ref}>
                    <h6 className="text-lg">Welcome to my portfolio</h6>
                    <h3 className="font-bold text-3xl">Hi! I'm Hoàng - a Backend Web Developer from Viet Nam</h3>
                    <div className="flex ml-4 md:mt-8 w-full mt-14 mb-2  justify-start">
                        <button
                            onClick={() => {
                                window.location.href = "#contact";
                            }}
                            className="btn px-3 md:px-12 btn-primary"
                        >
                            Contact me
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-1/2 md:flex hidden  flex-col justify-end" data-aos="zoom-in-up">
                <img className="h-auto  max-w-lg" src={BannerIMG} alt="image description"></img>
            </div>
        </div>
    );
}
