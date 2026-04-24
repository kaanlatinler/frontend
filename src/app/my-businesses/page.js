"use client";

import React, { useState, useEffect } from "react";
import PageHeading from "@/Components/PageHeading";
import SideBar from "@/Components/SideBar";

import {
  GetOwnerByToken,
  GetBusinessCount,
  GetEmployeeCount
} from "@/services/api";
import BusinessesSection from "@/partials/BusinessesSection";


async function getOwner({ token }) {
  try {
    return await GetOwnerByToken(token);
  } catch (error) {
    console.error("Error fetching owner:", error);
    return { error: "Failed to fetch owner data" }; // Hata mesajı döndürebilirsiniz
  }
}

async function getBusinessCount({ token }) {
  try {
    return await GetBusinessCount(token);
  } catch (error) {
    console.error("Error fetching business count:", error);

    return { error: "Failed to fetch business count" }; // Hata mesajı döndürebilirsiniz
  }
}

async function getEmployeeCount({ token }) {
  try {
    return await GetEmployeeCount(token);
  } catch (error) {
    console.error("Error fetching employee count:", error);

    return { error: "Failed to fetch employee count" }; // Hata mesajı döndürebilirsiniz
  }
}

export default function MyBusinesses() {
  const [sidebarActive, setSidebarActive] = useState(true);
  const [owner, setOwner] = useState(null);
  const [businessCount, setBusinessCount] = useState(null);
  const [employeeCount, setEmployeeCount] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      if (!owner) {
        getOwner({ token }).then((data) => {
          setOwner(data);
        });
      }
      getBusinessCount({ token }).then((data) => {
        setBusinessCount(data);
      });
      getEmployeeCount({ token }).then((data) => {
        setEmployeeCount(data);
      });
    }
  }, []);

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
}
