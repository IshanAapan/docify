import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors";
import Appointments from "../pages/Appointments";
import ApplyForDoctor from "../pages/ApplyForDoctor";
import Profile from "../pages/Profile";
import NavBar from "../components/NavBar";
const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="applyfordoctor" element={<ApplyForDoctor />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRoutes;
