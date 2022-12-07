/* eslint-disable react/jsx-no-comment-textnodes */
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer" ];
  const period = 2000;
  const yearsOld = new Date().getFullYear() - 1999;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I&apos;m Valéria`} <span className="txt-rotate" data-rotate='[ "Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                  {/* <p> I am {`${yearsOld}`} years old, graduated in Computer Science from the Federal Institute of Pará (IFPA). I currently work as a developer and I am studying for a postgraduate course in Informatics and education. I seek to improve my knowledge in Programming to help people, solve real problems and become a recognized professional. I seek to learn more and help those who need it too.</p> */}
                  <p>I am {`${yearsOld}`} years old, graduated in Analysis and Systems Development from the State University of Pará (UEPA). Currently working as a SQL developer and as SAP B1 support. I&aposm constantly looking to improve my knowledge in Programming, so that I can help people, solve real problems and become a professional recognized for my work, that&aposs what I want most.</p>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src="./img/header-img.svg" alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
