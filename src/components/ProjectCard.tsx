import { Col } from "react-bootstrap";
import { GithubRepos } from "../pages";
interface ProjectCardProps{
  projectData: GithubRepos
}
export const ProjectCard = ({ projectData }:ProjectCardProps) => {
  
  let imageURLPrev: string = projectData.imageURL ||'./img/banner-bg.png'
  
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projectData.html_url} rel="noopener noreferrer" target="_blank">
      <div className="proj-imgbx">
        <img alt="image project" src={imageURLPrev} />
        <div className="proj-txtx">
          <span>{projectData.description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
