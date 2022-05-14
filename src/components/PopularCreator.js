import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PopularCreaterApi } from "../Content-API/PopularCreaterApi";

export default function PopularCreator() {
  const [state, setstate] = useState(PopularCreaterApi);
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <div>
            <h1 className="h3 mb-0 text-gray-800">
              All Popular Creator
              <Link
                to="/AddPopularCreater"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-3"
              >
                <i className="fas fa-plus fa-sm text-white-50"></i>Add
              </Link>
            </h1>
          </div>
        </div>
      </div>

      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3"></div>
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
                    {/* <!-- <th>Video ID</th> --> */}
                    <th>Full Name</th>
                    <th>Profile</th>
                    <th>Username</th>
                    <th>Rank</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Sr</th>
                    {/* <!-- <th>Video ID</th> --> */}
                    <th>Full Name</th>
                    <th>Profile</th>
                    <th>Username</th>
                    <th>Rank</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody id="myTable_row">
                  {PopularCreaterApi.map((curElem) => {
                    const { id, SNo, FullName, ProfileImage, Username, Rank } =
                      curElem;
                    return (
                      <tr>
                        <td>{SNo}</td>
                        <td>{FullName}</td>
                        <td>
                          <img
                            src={ProfileImage}
                            style={{ maxWidth: "100px" }}
                            className="img-responsive"
                          />
                        </td>
                        <td>{Username}</td>
                        <td> {Rank}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-info my-1"
                            data-bs-toggle="modal"
                            data-bs-target="#myModalPopularEdit"
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                          {/* <!-- The Modal for Add Discovery Section--> */}
                          <div class="modal fade" id="myModalPopularEdit">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                {/* <!-- Modal Header --> */}
                                <div class="modal-header">
                                  <h4
                                    class="modal-title"
                                    style={{ fontSize: "21px" }}
                                  >
                                    Edit Popularity Rank
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
                                        Rank:
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
                          <button
                            type="button"
                            className="btn btn-danger my-1 ml-2"
                            onClick={() => {
                              alert("Are sure to delete?");
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
                  {PopularCreaterApi.map((curElem) => {
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
