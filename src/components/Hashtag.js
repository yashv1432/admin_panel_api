import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashtagApi, HashtagApi2 } from "../Content-API/HashtagApi";

export default function Hashtag() {
  const [activeInActive, setActiveInActive] = useState("active");
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Hashtag suggestion</h1>
          <button
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#myModalHashtag"
          >
            <i className="fas fa-plus fa-sm text-white-50"></i>Add hashtag
          </button>
          {/* <!-- The Modal for Add Hashtag Suggetion--> */}
          <div class="modal fade" id="myModalHashtag">
            <div class="modal-dialog">
              <div class="modal-content">
                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                  <h4 class="modal-title" style={{ fontSize: "20px" }}>
                    Add Hashtag Suggetion
                  </h4>
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
                        Hashtag Name:
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
                        for="fname"
                        className="col-sm-4 control-label"
                        style={{ fontSize: 17 }}
                      >
                        Hashtag Priority:
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
                        Hashtag Visible:
                      </label>
                      <div className="col-sm-8">
                        <select className="form-control">
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
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-active_hashtag-tab"
                  data-toggle="pill"
                  href="#pills-active_hashtag"
                  role="tab"
                  aria-controls="pills-active_hashtag"
                  aria-selected="true"
                  onClick={() => setActiveInActive("active")}
                >
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-inactive_hashtag-tab"
                  data-toggle="pill"
                  href="#pills-inactive_hashtag"
                  role="tab"
                  aria-controls="pills-inactive_hashtag"
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
              <BuildActiveInActiveHashtagBlock apiData={HashtagApi} />
            ) : (
              <BuildActiveInActiveHashtagBlock apiData={HashtagApi2} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const BuildActiveInActiveHashtagBlock = ({ apiData }) => {
  return (
    <div className="tab-content" id="pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="pills-active_hashtag"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div className="table-responsive" id="active_hashtag">
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
                <th>Rank</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Sr</th>
                <th>Name</th>
                <th>Rank</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody id="myTable_row">
              {apiData.map((curElem) => {
                const { id, SNo, Name, Rank } = curElem;
                return (
                  <tr>
                    <td>{SNo}</td>
                    <td>{Name}</td>
                    <td> {Rank}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#myModalEditHashtag"
                      >
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
                      {/* <!-- The Modal for Edit Hashtag Suggetion--> */}
                      <div class="modal fade" id="myModalEditHashtag">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            {/* <!-- Modal Header --> */}
                            <div class="modal-header">
                              <h4
                                class="modal-title"
                                style={{ fontSize: "21px" }}
                              >
                                Edit Hashtag Suggetion
                              </h4>
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
                                    Hashtag Name:
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
                                    for="fname"
                                    className="col-sm-4 control-label"
                                    style={{ fontSize: 17 }}
                                  >
                                    Hashtag Rank:
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
                                    Hashtag Visible:
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
