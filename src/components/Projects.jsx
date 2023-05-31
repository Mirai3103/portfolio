import ProjectCard from "./ProjectCard";
const fakeData = [1, 2, 3, 4];
export default function Projects(props) {
    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-y-8 pt-20 mt-20 " id="#projects" {...props}>
            <h3 className="font-bold text-center text-3xl">My projects</h3>
            <div className="flex gap-y-20 flex-col mt-10">
                {fakeData.map((item, index) => {
                    return (
                        <ProjectCard
                            key={item}
                            title={"Blog app"}
                            description={""}
                            linkDemo={"#"}
                            isLeft={index % 2 === 0}
                            linkGithub={"#"}
                        />
                    );
                })}
            </div>
        </div>
    );
}
