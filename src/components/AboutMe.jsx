import MyImage from "../assets/Group 1.png";
export default function AboutMe() {
    return (
        <div id="#about-me" className="max-w-6xl mb-[25vh] mx-auto flex flex-col gap-y-8 pt-24 mt-20">
            <h3 className="font-bold text-center text-3xl">About me</h3>
            <div className="flex flex-col md:flex-row gap-x-16 justify-evenly">
                <div
                    className="min-w-[30%]  px-8 md:px-0 py-4 md:py-0 mb-4 md:mb-0 grow-0 flex justify-center items-center "
                    data-aos="fade-up"
                >
                    <img className="object-contain h-auto w-full" src={MyImage} alt="avatar"></img>
                </div>
                <div
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="40"
                    className="grow flex flex-col pb-4 justify-end shrink"
                >
                    <p className="font-semibold text-base px-4  md:px-0">
                        I am Ngô Hữu Hoàng, a passionate software developer. Since I first discovered programming, I
                        have been captivated by its fascinating and limitless potential. From that point on, I have been
                        exploring and cultivating my interest in creating tools and applications that optimize computer
                        tasks and provide enjoyable experiences in gaming. Currently, I am a third-year student majoring
                        in Software Engineering at Saigon University. Throughout my academic journey, I have accumulated
                        knowledge and skills necessary to build quality software applications. I always strive to create
                        noteworthy software products that deliver real value to users.
                    </p>
                    <div className="mt-6 md:mt-12 mx-auto md:ml-0" data-aos="fade-up">
                        <button className="btn btn-secondary flex justify-center items-center gap-x-5 ">
                            <span>Download my CV</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-file-download text-current"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#fff"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                <path d="M12 17v-6" />
                                <path d="M9.5 14.5l2.5 2.5l2.5 -2.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
