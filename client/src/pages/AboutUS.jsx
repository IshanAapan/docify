import "../assets/styles/AboutUS.css";
import aboutImage from "../assets/images/AboutUS.jpg";

const AboutUS = () => {
  return (
    <>
      <div className="heading">
        <h1 className="aboutUS">About US</h1>
      </div>
      <div className="about-container">
        <img src={aboutImage} alt="aboutImage" />
        <p className="leftHomeText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsum
          praesentium sequi iste, labore maxime dolore excepturi quos provident!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsum
          praesentium sequi iste, labore maxime dolore excepturi quos provident!
          Sunt!
        </p>
      </div>
    </>
  );
};
export default AboutUS;
