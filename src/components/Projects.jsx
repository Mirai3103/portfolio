import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
//https://raw.githubusercontent.com/Mirai3103/portfolio/main/src/data/projects.json
export default function Projects(props) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/Mirai3103/portfolio/main/src/data/projects.json")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);
    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-y-8 pt-20 mt-20 " id="#projects" {...props}>
            <h3 className="font-bold text-center text-3xl">My projects</h3>
            <div className="flex gap-y-20 flex-col mt-10">
                {projects.map((item, index) => {
                    return (
                        <ProjectCard
                            imagePreview={item.imagePreview}
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            linkDemo={item.linkDemo}
                            isLeft={index % 2 === 0}
                            linkGithub={item.linkGithub}
                        />
                    );
                })}
            </div>
        </div>
    );
}
