"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosCloseCircleOutline } from "react-icons/io";

const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: "bi bi-grid-fill",
  },
  {
    title: "İşletmelerim",
    path: "/my-businesses",
    icon: "bi bi-stack",
  },
  {
    title: "Çalışanlarım",
    path: "/my-employees",
    icon: "bi bi-person-badge-fill",
  },
  {
    title: "Grafikler",
    path: "/charts",
    icon: "bi bi-grid-1x2-fill",
  },
  {
    title: "Raporlar",
    path: "/reports",
    icon: "bi bi-file-earmark-medical-fill",
  },
  {
    title: "Kazanç",
    path: "/income",
    icon: "bi bi-cash",
  },
  {
    title: "Çıkış",
    path: "/auth/logout",
    icon: "icon dripicons-exit",
  },
];

const SideBar = ({ isActive, toggleSidebar }) => {
  const pathname = usePathname();

  const isMenuItemActive = (path) => {
    return pathname === path ? "active" : "";
  };

  return (
    <div id="sidebar" className={isActive ? "active" : ""}>
      <div className="sidebar-wrapper">
        <div className="sidebar-header">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <a href="index.html">
                <img src="/assets/images/logo/logo.png" alt="Logo" />
              </a>
            </div>
            <div className="toggler">
              <a href="#" onClick={toggleSidebar}>
                <IoIosCloseCircleOutline />
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar-menu">
          <ul className="menu">
            <li className="sidebar-title">Menu</li>

            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`sidebar-item ${isMenuItemActive(item.path)}`}
              >
                <a href={item.path} className="sidebar-link">
                  <i className={item.icon}></i>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
