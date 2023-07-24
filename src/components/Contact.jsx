export default function Contact(props) {
    return (
        <div id="#contact" className="max-w-6xl mb-[25vh] mx-auto flex flex-col gap-y-8 pt-24 mt-20" {...props}>
            <h3 className="font-bold text-center text-3xl">Contact me</h3>

            <div className="hero  min-h-[76vh] px-5 rounded-xl bg-base-200">
                <div className="hero-content w-full flex-col lg:flex-row lg:items-start">
                    <div className="text-center grow w-full min-w-[1/2] lg:flex lg:flex-col lg:justify-center  lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Contact now</h1>
                        <div className="flex items-center justify-center gap-x-5 mt-4">
                            <a
                                className="flex w-10 h-10 justify-center items-center border rounded-full"
                                href="https://facebook.com/mirai1309"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </a>
                            <a
                                className="flex w-10 h-10 justify-center items-center border rounded-full"
                                href="https://github.com/Mirai3103"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 1024 1024"
                                    height="24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                                </svg>
                            </a>
                            <a
                                className="flex w-10 h-10 justify-center items-center border rounded-full"
                                href="https://github.com/Mirai3103"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 1024 1024"
                                    height="24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="flex items-stretch text-sm md:text-base flex-col  pl-0 md:pl-7 mt-7 ">
                            <a
                                href="mailto:huuhoag1412@gmail.com"
                                className="btn  text-base-content btn-ghost stroke-base px-0 md:px-8 flex flex-row gap-6  mt-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-mail  w-8 h-8 md:h-11 md:w-11"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                    <path d="M3 7l9 6l9 -6" />
                                </svg>
                                <span style={{ textTransform: "none" }} className="text-lg">
                                    huuhoag1412@gmail.com
                                </span>
                            </a>
                            <a
                                href="tel:+84376507260"
                                className="btn  text-base-content btn-ghost stroke-base  px-8  flex flex-row gap-6     mt-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-phone  w-8 h-8 md:h-11 md:w-11"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                </svg>
                                <span style={{ textTransform: "none" }} className="text-lg">
                                    +84 376 507 260
                                </span>
                            </a>
                            <a
                                href="tel:+84376507260"
                                className="btn  text-base-content btn-ghost stroke-base  px-8 flex flex-row gap-6     mt-4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-map-pins w-8 h-8 md:h-11 md:w-11"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10.828 9.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
                                    <path d="M8 7l0 .01" />
                                    <path d="M18.828 17.828a4 4 0 1 0 -5.656 0l2.828 2.829l2.828 -2.829z" />
                                    <path d="M16 15l0 .01" />
                                </svg>
                                <span style={{ textTransform: "none" }} className="text-lg">
                                    Quận 5, TP.HCM
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input required type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary flex gap-x-4 items-center">
                                        Send{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-brand-telegram"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            widths="1.5"
                                            stroke="#fff"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
