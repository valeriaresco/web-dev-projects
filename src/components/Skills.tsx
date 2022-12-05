import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>here you can observe a little more about my behavior within github, my favorite technologies, the times when I produce the most, etc...</p>
                        <img src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${process.env.NEXT_PUBLIC_GITHUB_USERNAME}&theme=github_dark`} alt="Image" />
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={`http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${process.env.NEXT_PUBLIC_GITHUB_USERNAME}&theme=github_dark`} alt="Image" />
                                
                            </div>
                            <div className="item">
                                <img src={`http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${process.env.NEXT_PUBLIC_GITHUB_USERNAME}&theme=github_dark`} alt="Image" />
                                
                            </div>
                            <div className="item">
                                <img src={`http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${process.env.NEXT_PUBLIC_GITHUB_USERNAME}&theme=github_dark&utcOffset=8`} alt="Image" />
                                
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src='./img/color-sharp.png' alt="Image" />
    </section>
  )
}
