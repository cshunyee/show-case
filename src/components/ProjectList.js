import { projectList } from "../data/projects";
import ProjectItem from "./ProjectItem";

const ProjectList = () => {
  return (
    <>
      {projectList.map((project, i) => (
        <ProjectItem
          id={project.id}
          key={`project_${project.id}`}
          index={i}
          title={project.title}
          description={project.description}
          comment={project.comment}
          date={project.date}
          skill={project.skill}
          link={project.link}
        />
      ))}
    </>
  );
};

export default ProjectList;
