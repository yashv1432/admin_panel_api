import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SidePanel() {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-mainbg pt-0 navbar-nav ml-auto bg-gradient-primary sidebar sidebar-dark accordion">
        <div
          className="collapse navbar-collapse right"
          id="navbarSupportedContent"
        >
          <ul
            className="navbar-nav ml-auto bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
            ers
          >
            {/* <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div> */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="index.html"
            >
              <div className="sidebar-brand-icon rotate-n-15"></div>
              <div className="sidebar-brand-text mx-3">UWO app Admin </div>
            </a>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="/"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="false"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-wrench"></i>
                <span>Super Admin</span>
              </a>
              <div
                id="collapseUtilities"
                className="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <Link className="collapse-item " to="/UserMigration">
                    User Migration
                  </Link>
                  <Link className="collapse-item " to="/AddSubAdmin">
                    Add Sub Admin
                  </Link>
                  <Link className="collapse-item " to="/ProfileVerification">
                    Profile Verification
                  </Link>
                  <Link className="collapse-item " to="/Banner">
                    Banner
                  </Link>
                  <Link className="collapse-item " to="/Notification">
                    Notification
                  </Link>
                  <Link className="collapse-item " to="/Report">
                    Report
                  </Link>
                  <Link className="collapse-item " to="/Hashtag">
                    Hashtag
                  </Link>
                  <Link className="collapse-item " to="/PopularCreator">
                    Popular Creator
                  </Link>
                  <Link className="collapse-item " to="/Language">
                    Language
                  </Link>
                  <Link className="collapse-item " to="/VideoCategory">
                    Video Category
                  </Link>
                  <Link className="collapse-item " to="/Question">
                    Questions
                  </Link>
                  <Link className="collapse-item " to="/SubAdminWork">
                    Sub Admin Work
                  </Link>
                </div>
              </div>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" exact to="/Dashboard">
                <i className="fas fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            <li className="nav-item  ">
              <Link className="nav-link" to="/AppUsers">
                <i className="fas fa-user"></i>
                <span>App Users</span>
              </Link>
            </li>

            <li className="nav-item  ">
              <Link className="nav-link" to="/DummyUsers">
                <i className="fas fa-user"></i>
                <span>Dummy Users</span>
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to="/AllSounds">
                <i className="fas fa-music"></i>
                <span>All Sounds</span>
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to="/AllVideos">
                <i className="fas fa-video"></i>
                <span>All Videos</span>
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to="/DiscoverySection">
                <i className="fas fa-crosshairs"></i>
                <span>Discovery Section</span>
              </Link>
            </li>

            <hr className="sidebar-divider d-none d-md-block" />
          </ul>
        </div>
      </nav>
  
  );
}
