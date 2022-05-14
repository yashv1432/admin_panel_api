import React from "react";
import { Link } from "react-router-dom";
import SubAdminWorkApi from "../Content-API/SubAdminWorkApi";

export default function SubAdminWork() {
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">All Admin</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-header py-3"></div>
          <div className="card-body">
            <div
              className="tab-pane fade show active"
              id="pills-clickable"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/* <!-- DataTales Example --> */}
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
                        <th>Email</th>
                        <th>Login Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Sr</th>
                        <th>Email</th>
                        <th>Login Type</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                    <tbody id="myTable_row">
                      {SubAdminWorkApi.map((curElem) => {
                        const { Sr, Email, LoginType } = curElem;
                        return (
                          <>
                            <tr>
                              <td> {Sr}</td>
                              <td>{Email}</td>
                              <td>{LoginType}</td>
                              <td>
                                <Link
                                  className="btn btn-primary"
                                  to="/NoRecord"
                                >
                                  <i className="fas fa-eye"></i>
                                </Link>
                                <button
                                  className="btn btn-danger ml-2"
                                  onClick={() => {
                                    alert("Are sure want to delete??");
                                  }}
                                >
                                  <i className="fas fa-minus-circle"></i>
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                  <nav aria-label="...">
                    <ul className="pagination justify-content-end">
                      {SubAdminWorkApi.map((curElem) => {
                        const { PageNo } = curElem;
                        return (
                          <li className="page-item ">
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
              {/* <!-- /.container-fluid --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
