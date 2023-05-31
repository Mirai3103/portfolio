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
                    <figure className="md:w-[35%] w-full">
                        <img
                            className="max-w-full h-auto rounded-lg"
                            src="https://cdn.discordapp.com/attachments/1109544174711218248/1113503394007625889/blogpreview.png"
                            alt="project preview"
                        />
                    </figure>
                )}
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className={`card-actions gap-4  ${isLeft ? " justify-end" : ""}`}>
                        <a className="btn px-12 btn-primary" href={linkDemo} target="_blank" rel="noreferrer">
                            Demo
                        </a>
                        <a className="btn px-12 btn-accent" href={linkGithub} target="_blank" rel="noreferrer">
                            Github
                        </a>
                    </div>
                </div>
                {!isLeft && isDesktop && (
                    <figure className="md:w-5/12 w-full">
                        <img
                            className="max-w-full h-auto rounded-lg"
                            src="https://cdn.discordapp.com/attachments/1109544174711218248/1113503394007625889/blogpreview.png"
                            alt="project preview"
                        />
                    </figure>
                )}
            </div>
        </div>
    );
}
