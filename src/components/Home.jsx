import BannerIMG from "../assets/banner.png";
export default function Home(props) {
    return (
        <div id="#home" className="flex  max-w-5xl mx-auto gap-x-20 justify-evenly min-h-[68vh]" {...props}>
            <div className="w-1/2 flex flex-col justify-end " data-aos="zoom-in-down">
                <div className="flex flex-col gap-2">
                    <h6 className="text-lg">Welcome to my portfolio</h6>
                    <h3 className="font-bold text-3xl">Hi! I'm Laffy - a Backend Web Developer from Viet Nam</h3>
                    <div className="flex ml-4 mt-8 w-full justify-start">
                        <button className="btn px-12 btn-primary">Contact me</button>
                    </div>
                </div>
            </div>
            <div className="w-1/2  flex flex-col justify-end" data-aos="zoom-in-up">
                <img className="h-auto  max-w-lg" src={BannerIMG} alt="image description"></img>
            </div>
        </div>
    );
}
