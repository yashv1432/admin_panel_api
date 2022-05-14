import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Creator, Vendor } from "../Content-API/QuestionApi";

export default function Question() {
  const [CreatorVendor, setCreatorVendor] = useState("active");
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">
            All Questions
            <button
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-3"
              onClick="AddQuestions('1');"
              data-bs-toggle="modal"
              data-bs-target="#myModalAdd"
            >
              <i className="fas fa-plus fa-sm text-white-50"></i>Add New
            </button>
            <div className="modal fade" id="myModalAdd">
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4 className="modal-title">Add Question</h4>
                    <button
                      type="button"
                      className="btn-close modal-close-btn"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <form
                      id="addsound"
                      method="post"
                      enctype="multipart/form-data"
                      action=""
                    >
                      <div classNameName="form-group row">
                        <label
                          for="profilepic"
                          classNameName="col-sm-4 control-label text-dark"
                          style={{ fontSize: 17 }}
                        >
                          Category
                        </label>
                        <div classNameName="col-sm-8">
                          <select
                            name="gender"
                            id="user_gender"
                            classNameName="form-control"
                          >
                            <option value="yes">Select Category</option>
                            <option value="no">1.</option>
                            <option value="no">2.</option>
                          </select>
                        </div>
                      </div>
                      <div classNameName="form-group row">
                        <label
                          for="fname"
                          classNameName="col-sm-4 control-label"
                          style={{ fontSize: 17 }}
                        >
                          Question
                        </label>

                        <div classNameName="col-sm-8">
                          <textarea
                            type="text"
                            name="sound_name"
                            id="sound_name"
                            required
                            classNameName="form-control"
                            placeholder="Question"
                          ></textarea>
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary mr-3"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      data-bs-dismiss="modal"
                    >
                      Add Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </h1>
          <div>
            <Link
              to="/EarningCreatorQ"
              className=" links_sublinks    "
              style={{ marginLeft: "22px" }}
            >
              <span>Earning Creator</span>
            </Link>
            <Link
              to="/BusinessVendorQ"
              className=" links_sublinks    "
              style={{ marginLeft: "22px" }}
            >
              <span>Business Vendor</span>
            </Link>
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
                  onClick={() => setCreatorVendor("active")}
                >
                  Creator
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
                  onClick={() => setCreatorVendor("InActive")}
                >
                  Vendor
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            {CreatorVendor === "active" ? (
              <BuildCreatorVendorBlock apiData={Creator} />
            ) : (
              <BuildCreatorVendorBlock apiData={Vendor} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const BuildCreatorVendorBlock = ({ apiData }) => {
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

                <th>Question</th>

                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Sr</th>

                <th>Question</th>

                <th>Action</th>
              </tr>
            </tfoot>
            <tbody id="myTable_row">
              {apiData.map((curElem) => {
                const { Sr, Question } = curElem;
                return (
                  <tr>
                    <td>{Sr}</td>
                    <td>{Question} </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#myModaldoc"
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
                      <div className="modal fade" id="myModaldoc">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            {/* <!-- Modal Header --> */}
                            <div className="modal-header">
                              <h4 className="modal-title">Edit Question</h4>
                              <button
                                type="button"
                                className="btn-close modal-close-btn"
                                data-bs-dismiss="modal"
                              ></button>
                            </div>

                            {/* <!-- Modal body --> */}
                            <div className="modal-body">
                              <form
                                id="addsound"
                                method="post"
                                enctype="multipart/form-data"
                                action=""
                              >
                                <div classNameName="form-group row">
                                  <label
                                    for="profilepic"
                                    classNameName="col-sm-4 control-label text-dark"
                                    style={{ fontSize: 17 }}
                                  >
                                    Category
                                  </label>
                                  <div classNameName="col-sm-8">
                                    <select
                                      name="gender"
                                      id="user_gender"
                                      classNameName="form-control"
                                    >
                                      <option value="yes">Creator</option>
                                      <option value="no">1.</option>
                                      <option value="no">2.</option>
                                    </select>
                                  </div>
                                </div>
                                <div classNameName="form-group row">
                                  <label
                                    for="fname"
                                    classNameName="col-sm-4 control-label"
                                    style={{ fontSize: 17 }}
                                  >
                                    Question
                                  </label>

                                  <div classNameName="col-sm-8">
                                    <textarea
                                      type="text"
                                      name="sound_name"
                                      id="sound_name"
                                      required
                                      classNameName="form-control"
                                      placeholder="Upload Your Document"
                                    ></textarea>
                                  </div>
                                </div>
                              </form>
                            </div>

                            {/* <!-- Modal footer --> */}
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary mr-3"
                                data-bs-dismiss="modal"
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="btn btn-success"
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
          {/* <nav aria-label="...">
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
        </nav> */}
        </div>
      </div>
    </div>
  );
};
