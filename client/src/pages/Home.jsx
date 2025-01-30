import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "../assets/styles/Home.css";
import homeImage from "../assets/images/Home.jpg";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <section className="leftHomeHeading">
          <h1>Your Health,</h1>
          <h1>Our Responsibility</h1>
          <p className="leftHomeText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsum
            praesentium sequi iste, labore maxime dolore excepturi quos
            provident! Sunt!
          </p>
        </section>
        <section>
          <div className="home-img">
            <img src={homeImage} alt="Home Image" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default Home;
