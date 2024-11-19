import React from "react";
import DashboardView from "../../Dashboard/DashboardView";
import Breadcrumb from "../../CommonComponet/Breadcrumb";
function TreatmentList() {
  const crumbs = [
    { label: "Dashboard", path: "/dashboardmenu" },
    { label: "Patients List", path: "/patients" },
    {
      label: "Patient Details",
      path: "/dashboardmenu/patients/PatientDetails",
    },
    {
      label: "Treatment List",
      path: "/dashboardmenu/patients/PatientDetails/TreatmentList",
    },
  ];
  return (
    <DashboardView>
      <div>
        <div className="Title py-2">
          <h1 className="font-AlbertSans font-bold text-2xl ">
            Treatment List
          </h1>
          <Breadcrumb crumbs={crumbs}></Breadcrumb>
        </div>
      </div>
    </DashboardView>
  );
}

export default TreatmentList;
