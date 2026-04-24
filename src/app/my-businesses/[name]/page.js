
"use client"
import PageHeading from "@/Components/PageHeading";
import SideBar from "@/Components/SideBar";
import BusinessesSection from "@/partials/BusinessesSection";
import React, { useState } from "react";

const BusinessPage = async ({ params }) => {
  const { name } = await params;
  const [sidebarActive, setSidebarActive] = useState(true);
  const decodedName = decodeURIComponent(name);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <div id="app">
      <SideBar isActive={sidebarActive} toggleSidebar={toggleSidebar} />
      <div id="main">
        <header className="mb-3">
          <a
            href="#"
            className="burger-btn d-block d-xl-none"
            onClick={toggleSidebar}
          >
            <i className="bi bi-justify fs-3"></i>
          </a>
        </header>
        <PageHeading title="İşletmelerim" />
        <div className="page-content">
          <BusinessesSection
            profile={owner}
            businessCount={businessCount}
            employeeCount={employeeCount}
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
