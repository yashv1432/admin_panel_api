import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LanguageApi } from "../Content-API/LanguageApi";

export default function Language() {
  // const [state, setstate] = useState(LanguageApi);
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">
            All Language
            <button
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-3"
              data-bs-toggle="modal"
              data-bs-target="#myModalAddLanguage"
            >
              <i className="fas fa-plus fa-sm text-white-50"></i>Language
            </button>
            {/* {/ <!-- The Modal for Edit Language--> /} */}
            <div class="modal fade" id="myModalAddLanguage">
              <div class="modal-dialog">
                <div class="modal-content">
                  {/* {/ <!-- Modal Header --> /} */}
                  <div class="modal-header">
                    <h4 class="modal-title">Add Language</h4>
                    <button
                      type="button"
                      class="btn-close modal-close-btn"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  {/* {/ <!-- Modal body --> /} */}
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
                          Language
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
                          Language Pic
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
                    </form>
                  </div>

                  {/* {/ <!-- Modal footer --> /} */}
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
          </h1>
          <div></div>
        </div>
      </div>
      {/* {/ <!-- Begin Page Content --> /} */}
      <div className="container-fluid">
        {/* {/ <!-- DataTales Example --> /} */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Languages</h6>
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
                    <th>Language</th>
                    <th>Pics</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Sr</th>
                    <th>Language</th>
                    <th>Pics</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody id="myTable_row">
                  {LanguageApi.map((curElem) => {
                    const { id, SNo, Language, Image } = curElem;
                    return (
                      <tr>
                        <td>{SNo}</td>
                        <td>{Language}</td>
                        <td>
                          <img
                            src={Image}
                            style={{ width: "100px" }}
                            className="img-thumbnail"
                          />
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-info"
                            data-bs-toggle="modal"
                            data-bs-target="#myModalEditLanguage"
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
                          {/* {/ <!-- The Modal for Edit Language--> /} */}
                          <div class="modal fade" id="myModalEditLanguage">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                {/* {/ <!-- Modal Header --> /} */}
                                <div class="modal-header">
                                  <h4 class="modal-title">Edit Language</h4>
                                  <button
                                    type="button"
                                    class="btn-close modal-close-btn"
                                    data-bs-dismiss="modal"
                                  ></button>
                                </div>

                                {/* {/ <!-- Modal body --> /} */}
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
                                        Language
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
                                        Language New Pic
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
                                        Language Old Pic
                                      </label>
                                      <div className="col-sm-4">
                                        <img
                                          src="images/other.jpg"
                                          width={"200px"}
                                          className="border p-2"
                                          style={{ borderRadius: "5px" }}
                                        />
                                      </div>
                                    </div>
                                  </form>
                                </div>

                                {/* {/ <!-- Modal footer --> /} */}
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
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <nav aria-label="...">
                <ul className="pagination justify-content-end">
                  {LanguageApi.map((curElem) => {
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
    </div>
  );
}
