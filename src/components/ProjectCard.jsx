import { useMediaQuery } from "usehooks-ts";
// eslint-disable-next-line react/prop-types, no-unused-vars
export default function ProjectCard({ imagePreview, title, linkDemo, linkGithub, description, isLeft = false }) {
    // min-width: 768px
    const isDesktop = useMediaQuery("(min-width: 768px)");
    return (
        <div>
            <div
                className="card md:card-side bg-base-100 shadow-md border dark:border-gray-700"
                data-aos={isLeft ? "fade-right" : "fade-left"}
            >
                {(isLeft || !isDesktop) && (
                    <figure className="md:w-5/12 shrink-0 w-full">
                        <img className="max-w-full h-auto rounded-lg" src={imagePreview} alt="project preview" />
                    </figure>
                )}
                <div className="card-body px-4 md:p-[var(--padding-card, 2rem)]">
                    <h2 className="card-title font-bold text-3xl mb-5">{title}</h2>
                    <p>{description}</p>
                    <div className={`card-actions justify-evenly mt-4 md:mt-0 gap-4  ${isLeft ? " justify-end" : ""}`}>
                        <a
                            className="btn md:px-12 px-6 btn-primary flex justify-center items-center gap-x-4"
                            href={linkDemo}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Demo
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-arrow-up-right justify-self-end"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#fff"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 7l-10 10" />
                                <path d="M8 7l9 0l0 9" />
                            </svg>
                        </a>
                        <a
                            className="btn md:px-12 px-6 text-gray-800 flex justify-center items-center gap-x-4 btn-accent"
                            href={linkGithub}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>
                {!isLeft && isDesktop && (
                    <figure className="md:w-5/12 shrink-0  w-full">
                        <img
                            className="max-w-full h-auto rounded-lg rounded-lg"
                            src={imagePreview}
                            alt="project preview"
                        />
                    </figure>
                )}
            </div>
        </div>
    );
}
