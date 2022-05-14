import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  VideoCategoryApi,
  VideoCategoryApi2,
} from "../Content-API/VideoCategoryApi";

export default function VideoCategory() {
  const [ActiveNonActive, setActiveNonActive] = useState("active");
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">
            All Video Category
            <button
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-3"
              data-bs-toggle="modal"
              data-bs-target="#myModalAddVideo"
            >
              <i className="fas fa-plus fa-sm text-white-50"></i>Add New
            </button>
            {/* {/ {/ <!-- The Modal for Add Discovery Section--> /} /} */}
            <div class="modal fade" id="myModalAddVideo">
              <div class="modal-dialog">
                <div class="modal-content">
                  {/* {/ {/ <!-- Modal Header --> /} /} */}
                  <div class="modal-header">
                    <h4 class="modal-title" style={{ fontSize: "21px" }}>
                      Add Video Category
                    </h4>
                    <button
                      type="button"
                      class="btn-close modal-close-btn"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  {/* {/ {/ <!-- Modal body --> /} /} */}
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
                          Category Name
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
                          Category Pic:
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
                          Category Priority:
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
                          Category Visible:
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

                  {/* {/ {/ <!-- Modal footer --> /} /} */}
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
          </h1>
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
                  id="pills-pending-tab"
                  data-toggle="pill"
                  href="#pills-pending"
                  role="tab"
                  aria-controls="pills-pending"
                  aria-selected="true"
                  onClick={() => setActiveNonActive("active")}
                >
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-completed-tab"
                  data-toggle="pill"
                  href="#pills-completed"
                  role="tab"
                  aria-controls="pills-completed"
                  aria-selected="false"
                  onClick={() => setActiveNonActive("Nonactive")}
                >
                  Non Active
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            {ActiveNonActive === "active" ? (
              <BuildActiveNonActiveVideoBlock apiData={VideoCategoryApi} />
            ) : (
              <BuildActiveNonActiveVideoBlock apiData={VideoCategoryApi2} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const BuildActiveNonActiveVideoBlock = ({ apiData }) => {
  return (
    <div className="tab-content" id="pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="pills-pending"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">
          {/* <!-- DataTales Example --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Video Category
              </h6>
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
                      <th>Category</th>
                      <th>Play Preview</th>
                      <th>Picture</th>
                      <th>Active</th>
                      <th>Priority</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Sr</th>
                      <th>Category</th>
                      <th>Play Preview</th>
                      <th>Picture</th>
                      <th>Active</th>
                      <th>Priority</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody id="myTable_row">
                    {apiData.map((curElem) => {
                      const {
                        id,
                        SNo,
                        Category,
                        PosterImg,
                        PlayPreview,
                        Image,
                        Active,
                        Priority,
                      } = curElem;
                      return (
                        <tr>
                          <td>{SNo}</td>
                          <td>{Category}</td>
                          <td>
                            <video
                              width="120"
                              height="100"
                              poster={PosterImg}
                              controls
                            >
                              <source src={PlayPreview} type="video/mp4" />
                            </video>
                          </td>
                          <td>
                            <img
                              src={Image}
                              style={{ width: "100px" }}
                              className="img-thumbnail"
                            />
                          </td>
                          <td>{Active}</td>
                          <td>{Priority}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-info"
                              data-bs-toggle="modal"
                              data-bs-target="#myModalEditCategory"
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
                            {/* {/ {/ <!-- The Modal for Add Discovery Section--> /} /} */}
                            <div class="modal fade" id="myModalEditCategory">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  {/* {/ {/ <!-- Modal Header --> /} /} */}
                                  <div class="modal-header">
                                    <h4
                                      class="modal-title"
                                      style={{ fontSize: "21px" }}
                                    >
                                      Edit Category
                                    </h4>
                                    <button
                                      type="button"
                                      class="btn-close modal-close-btn"
                                      data-bs-dismiss="modal"
                                    ></button>
                                  </div>

                                  {/* {/ {/ <!-- Modal body --> /} /} */}
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
                                          Category
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
                                          Priority
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
                                          Active
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
                                          className="col-sm-4 control-label"
                                          style={{ fontSize: 17 }}
                                        >
                                          Category New Pic
                                        </label>
                                        <div className="col-sm-8 ">
                                          <input
                                            type="file"
                                            name="thumb"
                                            id="thumb"
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
                                          Category Old Pic
                                        </label>
                                        <div className="col-sm-4">
                                          <img
                                            src="images/uwo.jpg"
                                            width={"200px"}
                                            className="border p-1"
                                          />
                                        </div>
                                      </div>
                                    </form>
                                  </div>

                                  {/* {/ {/ <!-- Modal footer --> /} /} */}
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
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
    </div>
  );
};
