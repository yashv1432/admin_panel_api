import React from "react";
import { Link } from "react-router-dom";
import ReportApi from "../Content-API/ReportApi";
export default function Report() {
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">
            All Reasons
            <button
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-3"
              data-bs-toggle="modal"
              data-bs-target="#myModalReport"
            >
              <i className="fas fa-plus fa-sm text-white-50"></i>Reason
            </button>
            {/* <!-- The Modal for Add Section--> */}
            <div class="modal fade" id="myModalReport">
              <div class="modal-dialog">
                <div class="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div class="modal-header">
                    <h5 class="modal-title text-dark">Add Report Reason</h5>
                    <button
                      type="button"
                      class="btn-close modal-close-btn"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div class="modal-body">
                    <form
                      id="addsound"
                      method="post"
                      enctype="multipart/form-data"
                      action=""
                    >
                      <div className="form-group row">
                        <label
                          for="fname"
                          className="col-sm-4 control-label text-dark"
                          style={{ fontSize: "17" }}
                        >
                          Report Reason
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            name="sound_name"
                            id="sound_name"
                            required
                            className="form-control"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary mr-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      class="btn btn-success"
                      data-bs-dismiss="modal"
                    >
                      Add now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </h1>
          <div>
            <Link
              to="/AllReportVideo"
              class="links_sublinks    "
              style={{ marginLeft: "22px" }}
            >
              <span>Report Video</span>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Reasons</h6>
          </div>
          <div className="card-body">
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
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Sr</th>
                    <th>Reason</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody id="myTable_row">
                  {ReportApi.map((curElem) => {
                    const { Sr, Reason } = curElem;
                    return (
                      <>
                        <tr>
                          <td>{Sr}</td>
                          {/* <!-- <td></td> --> */}
                          <td>{Reason}</td>
                          <td>
                            <button type="button" className="btn btn-info">
                              <i className="fas fa-edit"></i>
                            </button>
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
              {/* <nav aria-label="...">
                <ul className="pagination justify-content-end">
                  {ReportApi.map((curElem) => {
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
              </nav> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
