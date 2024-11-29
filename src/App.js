import React from 'react'
import "./App.css";
import LogingPage from './Componet/Auth/Loging/LogingPage';
import RegisterPage from './Componet/Auth/Signin/RegisterPage';
import ForgotPassword from './Componet/Auth/Loging/ForgotPassword';
import DashboardView from './Componet/Dashboard/DashboardView';
import { Route, Routes } from 'react-router-dom';
import Patients from './Componet/Pages/patients/Patients';
import Dashboard from './Componet/Pages/Dashboard';
import Treatment from './imges/Svg File/Treatment';
import InspectionRequest from './Componet/Pages/InspectionRequest';
import EmergencyPatient from './Componet/Pages/EmergencyPatient';
import RunningTreatment from './Componet/Pages/RunningTreatment';

import PatientsList from './Componet/Pages/patients/PatientsList';
import PatientDetails from './Componet/Pages/patients/PatientDetails';
import TreatmentList from './Componet/Pages/patients/TreatmentList';
import Sidebar from './Componet/Sidebar/Sidebar';
import Dubble from './Componet/Sidebar/Dubble';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        {/* <Route path="/dashboard" element={<DashboardView />} /> */}

        <Route path="/dashboardmenu" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/PatientsList" element={<PatientsList />} />
        <Route path="/PatientDetails/:id" element={<PatientDetails />} />
        <Route path="/TreatmentList" element={<TreatmentList />} />

        <Route path="/Treatment" element={<RunningTreatment />} />
        <Route path="/InspectionRequest" element={<InspectionRequest />} />
        <Route path="/EmergencyPatient" element={<EmergencyPatient />} />

        <Route path="/side" element={<Sidebar />} />

        <Route path="/D" element={<Dubble />} />
      </Routes>
    </>
  );
}

export default App
