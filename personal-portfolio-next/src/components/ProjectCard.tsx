import { getLinkPreview } from "link-preview-js";
import { Col } from "react-bootstrap";
import { GithubRepos } from "../pages";
interface ProjectCardProps{
  projectData: GithubRepos
}

interface LinkPreview {
  url: string;
  mediaType: string;
  contentType: string;
  favicons: string[];
}
interface LinkPreview2{
  url: string;
  title: string;
  siteName: string | undefined;
  description: string | undefined;
  mediaType: string;
  contentType: string | undefined;
  images: string[];
  videos: {}[];
  favicons: string[];
}
export const ProjectCard = ({ projectData }:ProjectCardProps) => {

  console.log(projectData.imageURL);
  
  let imageURLPrev: string = projectData.imageURL ||'./img/banner-bg.png'
  // getLinkPreview(projectData.html_url).then((data) =>
  // {// console.debug(data)
  // // console.log(data.images[0])
  // if(data.images[0]){
  //   imageURL = data.images[0]
  // }}
  // );
  
  
  return (
    <Col size={12} sm={6} md={4}>
      <a href={projectData.html_url} rel="noreferrer" target="_blank">
      <div className="proj-imgbx">
        <img alt="image project" src={imageURLPrev} />
        <div className="proj-txtx">
          {/* <h4>{projectData.name}</h4> */}
          <span>{projectData.description}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
