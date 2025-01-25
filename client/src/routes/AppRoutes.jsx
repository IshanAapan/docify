import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Appointments from "../pages/Appointments";
import ApplyForDoctor from "../pages/ApplyForDoctor";
import AboutUS from "../pages/AboutUS";
import ContactUS from "../pages/ContactUS";
import Profile from "../pages/Profile";
const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<NavBar/>}></Route> */}
          <Route index element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="applyfordoctor" element={<ApplyForDoctor />} />
          <Route path="aboutus" element={<AboutUS />} />
          <Route path="contactus" element={<ContactUS />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRoutes;
