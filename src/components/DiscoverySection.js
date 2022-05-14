import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DiscoveryApi, DiscoveryApi2 } from "../Content-API/DiscoveryApi";

export default function DiscoverySection() {
  const [activeInActive, setActiveInActive] = useState("active");
  return (
    <div>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Discovery Sections</h1>
          <button
            class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            <i class="fas fa-plus fa-sm text-white-50"></i>Add Section
          </button>
          {/* <!-- The Modal for Add Discovery Section--> */}
          <div class="modal fade" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h4 class="modal-title">Add Sound Section</h4>
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
                        className="col-sm-4 control-label"
                        style={{ fontSize: 17 }}
                      >
                        Section Name:
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          name="sound_name"
                          id="sound_name"
                          required
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="profilepic"
                        className="col-sm-4 control-label"
                        style={{ fontSize: 17 }}
                      >
                        Section Pic:
                      </label>
                      <div className="col-sm-8 ">
                        <input
                          type="file"
                          name="thumb"
                          id="thumb"
                          onchange="return check_file_size()"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="fname"
                        className="col-sm-4 control-label"
                        style={{ fontSize: 17 }}
                      >
                        Section Priority:
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          name="sound_name"
                          id="sound_name"
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-sm-4">
                        <span
                          className="bg-danger pl-3 pr-3 pt-1 pb-1"
                          style={{
                            height: "18px",
                            width: "110px",
                            borderRadius: "20px",
                            color: "#fff",
                            fontSize: "10px",
                            fontWeight: "normal",
                          }}
                        >
                          Must be unique
                        </span>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        for="profilepic"
                        className="col-sm-4 control-label"
                        style={{ fontSize: 17 }}
                      >
                        Section Visible:
                      </label>
                      <div className="col-sm-8">
                        <select
                          name="gender"
                          id="user_gender"
                          className="form-control"
                        >
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
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
                    Add Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-toggle="pill"
                  href="#pills-active_section"
                  role="tab"
                  aria-controls="pills-active_section"
                  aria-selected="true"
                  onClick={() => setActiveInActive("active")}
                >
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-toggle="pill"
                  href="#pills-inactive_section"
                  role="tab"
                  aria-controls="pills-inactive_section"
                  aria-selected="false"
                  onClick={() => setActiveInActive("inActive")}
                >
                  In-Active
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            {activeInActive === "active" ? (
              <BuildActiveInActiveBlock apiData={DiscoveryApi} />
            ) : (
              <BuildActiveInActiveBlock apiData={DiscoveryApi2} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const BuildActiveInActiveBlock = ({ apiData }) => {
  return (
    <div
      className="tab-pane fade show active"
      id="pills-active_section"
      role="tabpanel"
      aria-labelledby="pills-home-tab"
    >
      <div className="table-responsive" id="active_section">
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellspacing="0"
        >
          <thead>
            <tr>
              <th>Sr</th>
              <th>Name</th>
              <th>Pic</th>
              <th>Rank</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Sr</th>
              <th>Name</th>
              <th>Pic</th>
              <th>Rank</th>
              <th>Created</th>
              <th>Action</th>
            </tr>
          </tfoot>
          <tbody id="myTable_row">
            {apiData.map((curElem) => {
              const { id, SNo, Name, Image, Rank, Date } = curElem;
              return (
                <tr>
                  <td>{SNo}</td>
                  <td>{Name}</td>
                  <td>
                    <img
                      src={Image}
                      style={{ maxWidth: "100px" }}
                      className="img-thumbnail"
                    />
                  </td>
                  <td>{Rank}</td>
                  <td>{Date}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-toggle="modal"
                      data-bs-target="#myModalEye"
                    >
                      <i className="fas fa-edit"></i>
                      {/* <!-- The Modal for Add Section--> */}
                      <div class="modal fade" id="myModalEye">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            {/* <!-- Modal Header --> */}
                            <div class="modal-header">
                              <h5 class="modal-title text-dark">
                                Edit Section
                              </h5>
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
                                    style={{ fontSize: 17 }}
                                  >
                                    Section Name:
                                  </label>
                                  <div className="col-sm-8">
                                    <input
                                      type="text"
                                      name="sound_name"
                                      id="sound_name"
                                      required
                                      className="form-control"
                                      placeholder="uwoinfluencers"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    for="fname"
                                    className="col-sm-4 control-label text-dark"
                                    style={{ fontSize: 17 }}
                                  >
                                    Section Priority:
                                  </label>
                                  <div className="col-sm-4">
                                    <input
                                      type="text"
                                      name="sound_name"
                                      id="sound_name"
                                      required
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="col-sm-4">
                                    <span
                                      className="bg-danger pl-3 pr-3 pt-1 pb-1"
                                      style={{
                                        height: "18px",
                                        width: "110px",
                                        borderRadius: "20px",
                                        color: "#fff",
                                        fontSize: "10px",
                                        fontWeight: "normal",
                                      }}
                                    >
                                      Must be unique
                                    </span>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    for="profilepic"
                                    className="col-sm-4 control-label text-dark"
                                    style={{ fontSize: 17 }}
                                  >
                                    Section Visible:
                                  </label>
                                  <div className="col-sm-8">
                                    <select
                                      name="gender"
                                      id="user_gender"
                                      className="form-control"
                                    >
                                      <option value="yes">Yes</option>
                                      <option value="no">No</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    for="profilepic"
                                    className="col-sm-4 control-label text-dark"
                                    style={{ fontSize: 17 }}
                                  >
                                    Change Pic:
                                  </label>
                                  <div className="col-sm-8 ">
                                    <input
                                      type="file"
                                      name="thumb"
                                      id="thumb"
                                      onchange="return check_file_size()"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label
                                    for="profilepic"
                                    className="col-sm-4 control-label text-dark"
                                    style={{ fontSize: 17 }}
                                  >
                                    Secion Pic:
                                  </label>
                                  <div className="col-sm-8 ">
                                    <img
                                      src="/images/uwo.jpg"
                                      width={"100px"}
                                      height={"100px"}
                                      style={{ marginRight: "12rem" }}
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
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                    <Link
                      type="button"
                      className="btn btn-primary ml-2"
                      to="/VideoSection"
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
  );
};
