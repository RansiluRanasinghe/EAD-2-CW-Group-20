import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/landing/LandingPage';

import AdmDashboard from '@/pages/admin/AdmDashboard';
import AdmAppointments from '@/pages/admin/AdmAppointments';
import AdmSchedule from '@/pages/admin/AdmSchedule';
import AdmManageDoc from '@/pages/admin/AdmManageDoc';
import AdmProfile from '@/pages/admin/AdmProfile';

import DocDashboard from '@/pages/doctor/DocDashboard';
import DocAppointments from '@/pages/doctor/DocAppointments';
import DocSchedule from '@/pages/doctor/DocSchedule';
import DocProfile from '@/pages/doctor/DocProfile';

import PatDashboard from '@/pages/patient/PatDashboard';
import PatBookAppointment from '@/pages/patient/PatBookAppointment';
import PatAppointments from '@/pages/patient/PatAppointments';
import PatProfile from '@/pages/patient/PatProfile';

import Login from '@/pages/auth/Login';
import Signup from '@/pages/auth/SignUp';
import ForgotPassword from '@/pages/auth/ForgotPassword';

import PageNotFound from '@/pages/PageNotFound';

import PatConfirmPay from '@/pages/patient/PatConfirmAppointment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/services" element={<LandingPage />} />
        <Route path="/doctors" element={<LandingPage />} />
        <Route path="/about" element={<LandingPage />} />
        <Route path="/contacts" element={<LandingPage />} />

        <Route path="/admdashboard" element={<AdmDashboard/>} />
        <Route path="/admappointments" element={<AdmAppointments/>} />
        <Route path="/admschedule" element={<AdmSchedule/>} />
        <Route path="/admmanagedoc" element={<AdmManageDoc/>} />
        <Route path="/admprofile" element={<AdmProfile/>} />

        <Route path="/docdashboard" element={<DocDashboard/>} />
        <Route path="/docappointments" element={<DocAppointments/>} />
        <Route path="/docschedule" element={<DocSchedule/>} />
        <Route path="/docprofile" element={<DocProfile/>} />

        <Route path="/patdashboard" element={<PatDashboard/>} />
        <Route path="/patbookappointment" element={<PatBookAppointment/>} />
        <Route path="/patappointments" element={<PatAppointments/>} />
        <Route path="/patprofile" element={<PatProfile/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />

        <Route path="/patpay" element={<PatConfirmPay/>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
export default App;