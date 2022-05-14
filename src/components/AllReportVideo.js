import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pending, Accepted, Rejected } from "../Content-API/ReportVideoApi";

export default function AllReportVideo() {
  const [PendingAcceptedCreated, setPendingAcceptedCreated] =
    useState("accepted");
  return (
    <div>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">All Reported Video</h1>
        </div>
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-pending-tab"
                  data-toggle="pill"
                  href="#pills-pending"
                  role="tab"
                  aria-controls="pills-pending"
                  aria-selected="true"
                  onClick={() => setPendingAcceptedCreated("pending")}
                >
                  Pending
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-accepted-tab"
                  data-toggle="pill"
                  href="#pills-accepted"
                  role="tab"
                  aria-controls="pills-accepted"
                  aria-selected="false"
                  onClick={() => setPendingAcceptedCreated("accepted")}
                >
                  Accepted
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-rejected-tab"
                  data-toggle="pill"
                  href="#pills-rejected"
                  role="tab"
                  aria-controls="pills-rejected"
                  aria-selected="false"
                  onClick={() => setPendingAcceptedCreated("rejected")}
                >
                  Rejected
                </a>
              </li>
            </ul>
            {/* <!-- <input type="text" id="search_criteria" className="form-control" onkeyup="hashtagsearch_criteria(this.value)"
			placeholder="Search for hashtag.."> --> */}
          </div>
          <div className="card-body">
            {PendingAcceptedCreated === "accepted" ? (
              <BuildPendingAcceptedRejectedBlock apiData={Accepted} />
            ) : (
              <></>
            )}

            {PendingAcceptedCreated === "rejected" ? (
              <BuildPendingAcceptedRejectedBlock apiData={Rejected} />
            ) : (
              <></>
            )}

            {PendingAcceptedCreated === "pending" ? (
              <BuildPendingAcceptedRejectedBlock apiData={Pending} />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
const BuildPendingAcceptedRejectedBlock = ({ apiData }) => {
  return (
    <div className="tab-content" id="pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="pills-pending"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        {/* <div
          className="tab-pane fade"
          id="pills-accepted"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        > */}
        {/* <div className="table-responsive" id="accepted"> */}
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Sr</th>
                <th>Reason</th>
                <th>video</th>
                <th>Reported By</th>
                <th>status</th>
                <th>created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Sr</th>
                <th>Reason</th>
                <th>video</th>
                <th>Reported By</th>
                <th>status</th>
                <th>created</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody id="myTable_row">
              {apiData.map((curElem) => {
                const { Sr, Reason, Video, ReportedBy, Status, Created } =
                  curElem;
                return (
                  <tr>
                    <td>{Sr}</td>
                    <td>{Reason}</td>
                    <td>
                      <video width="120" height="100" poster="" controls>
                        <source src={Video} type="video/mp4" />
                      </video>
                    </td>
                    <td>{ReportedBy}</td>
                    <td>{Status}</td>
                    <td>{Created}</td>
                    <td>
                      <a
                        href="?p=reports&page=reportVideo&curr_page=1&action=approve&id=57&video_id=29044"
                        className="btn btn-success"
                      >
                        <i className="fas fa-check"></i>
                      </a>
                      <a
                        href="?p=reports&page=reportVideo&curr_page=1&action=decline&id=57&video_id=29044"
                        className="btn btn-danger"
                        onclick="alert('Are you sure to Decline');"
                      >
                        <i className="fas fa-ban"></i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav aria-label="...">
            <ul className="pagination justify-content-end">
              {apiData.map((curElem) => {
                const { PageNo } = curElem;
                return (
                  <li className="page-item">
                    <Link className="page-link" to="/">
                      {PageNo}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
