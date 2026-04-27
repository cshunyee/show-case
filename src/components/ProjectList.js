import { projectList } from "../data/projects";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
    return (
        <>
            {projectList.map((project, i) => (
                <ProjectItem
                    key={project.id}
                    id={project.id}
                    index={i}
                    title={project.title}
                    description={project.description}
                    comment={project.comment}
                    date={project.date}
                    skill={project.skill}
                    link={project.link}
                    url={project.url}
                />
            ))}
        </>
    );
};

export default ProjectList;
