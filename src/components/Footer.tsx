import { Container, Row, Col } from "react-bootstrap";
import { GithubRepos, GithubUser } from "../pages";
const currentYear = new Date().getFullYear();

interface NavBarProps{
  githubUserInfo: GithubUser
}

export const Footer = ({githubUserInfo}:NavBarProps) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <div className="social-icon mt-4">
            <img src={githubUserInfo.avatar_url} className="border border-white rounded-circle" alt="Logo"/>
            <p>{githubUserInfo.login}</p>
          </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-4">
              <a href='https://www.linkedin.com/in/valéria-resco' target="_blank" rel="noopener noreferrer"><img src='./img/nav-icon1.svg' alt="Icon" /></a>
              {/* <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src='./img/nav-icon2.svg' alt="Icon" /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src='./img/nav-icon3.svg' alt="Icon" /></a> */}
            </div>
            <p>Copyright {currentYear}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
