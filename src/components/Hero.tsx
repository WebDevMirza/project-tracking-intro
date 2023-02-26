import HeroImg from "../assets/images/illustration-devices.svg";
import "../assets/styles/hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="bg">
          <div className="hero-img">
            <img src={HeroImg} alt="illustration devices photo" />
          </div>
        </div>

        <div className="hero-body">
          <div className="hero-intro">
            <span className="badge">NEW</span>
            <p className="badge-desc">MONOGRAPH DASHBOARD</p>
          </div>
          <h1 className="hero-title">POWERFUL INSIGHTS INTO YOUR TEAM</h1>
          <p className="hero-text">Project planning and time tracking for agile teams</p>
          <div className="hero-action">
            <a className="btn" href="#">
              SCHEDULE A DEMO
            </a>
            <p>TO SEE A PREVIEW</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
