import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import WardenMain from './Warden/WardenMain'; 
import StudentAttendance from './Warden/StudentAttendance'; 
import UpdateProfile from './Warden/UpdateProfile';
import AddStudent from './Admin/AddStudent';
import AddWarden from './Admin/AddWarden';
import UpdateAdmin from './Admin/UpdateAdmin';
import AdminDashboard from './Admin/AdminDashboard';
import HomePage from './Resident/Home_page/homePage';
import MealsTable from './Warden/MealsTable';
import FoodQR from './Resident/FoodQR/FoodQR';
import ResProfile from './Resident/ResProfile/ResProfile';
import MealSelectionPage from './Resident/Meals/MealSelection';
import LoginPage from './Login/Login';
import Fauth from './Food_auth/fauth';
import NotFound from './NotFound'; // Your 404 component
import { ToastContainer } from 'react-toastify';
import About from './About';

function WardenLayout() {
  return (
    <div>
      <WardenMain />
      <Outlet /> 
    </div>
  );
}

function AdminLayout() {
  return (
    <div>
      <AdminDashboard /> {/* Render the AdminDashboard here only if necessary */}
      <Outlet /> 
    </div>
  );
}

function ResidentLayout() {
  return (
    <div>
      <HomePage /> 
      <Outlet /> 
    </div>
  );
}

function Routerpage() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/resident_home" element={<ResidentLayout />} />
        <Route path="/meal-selection" element={<MealSelectionPage />} />
        <Route path="/foodqr" element={<FoodQR />} />
        <Route path="/residentprofile" element={<ResProfile />} />

        <Route path="/warden" element={<WardenLayout />}>
          <Route index element={<StudentAttendance />} />  
          <Route path="studentAttendance" element={<StudentAttendance />} />
          <Route path="updateprofile" element={<UpdateProfile />} />
          <Route path="mealsTable" element={<MealsTable />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="addStudent" element={<AddStudent />} />
          <Route path="addWarden" element={<AddWarden />} />
          <Route path="updateProfile" element={<UpdateAdmin />} />
        </Route>

        <Route path="/kitchenDept" element={<Fauth />} />
        <Route path="/404" element={<NotFound />} /> 
        <Route path='/about' element={<About/>}/>
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default Routerpage;
