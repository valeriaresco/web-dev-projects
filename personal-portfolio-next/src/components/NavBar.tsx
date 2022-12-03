import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from 'next/image'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { GithubUser } from "../pages";
interface NavBarProps{
  githubUserInfo: GithubUser
}
export const NavBar = ({githubUserInfo}:NavBarProps) => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value:string) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <div className="logo-icon">
            <img src={githubUserInfo.avatar_url} alt="Logo"/>
          </div>
{/* ======= */}
            {/* <img src={githubUserInfo.avatar_url} className="border border-3 border-white rounded-circle" alt="Logo" /> */}
{/* >>>>>>> 18d457083a895a27a191d17fcca5f250c4c31820:personal-portfolio-next/src/components/NavBar.tsx */}
            {/* <Image
              src='https://github.com/josiassantos15.png'
              alt="Picture of the author"
              width={40} automatically provided
              height={40} 
              // blurDataURL="data:..." automatically provided
              // placeholder="blur" // Optional blur-up while loading
            /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/josias-santos-265319179/" target="_blank" rel="noopener noreferrer"><img src='./img/nav-icon1.svg' alt="Icon" /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src='./img/nav-icon2.svg' alt="Icon" /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src='./img/nav-icon3.svg' alt="Icon" /></a>
              </div>
              {/* <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
