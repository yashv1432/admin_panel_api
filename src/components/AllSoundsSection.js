import React from "react";
import { Link } from "react-router-dom";
import AllSoundsSectionApi from "../Content-API/AllSoundsSectionApi";

export default function AllSounds() {
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">
            All Sounds
            <button
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-3"
              ype="button"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              <i className="fas fa-plus fa-sm text-white mb-0"></i> Section
            </button>
            {/* <!-- The Modal for Add Section--> */}
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
                      Submit Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </h1>
          <div>
            <Link
              to="/AllSounds"
              className=" links_sublinks  links_sublinks_active  "
              style={{ marginLeft: " 22px" }}
            >
              <span>Admin Sounds</span>
            </Link>
            <Link
              to="/AllSoundsSection"
              className="ml-3 links_sublinks    "
              style={{ marginLeft: " 22px" }}
            >
              <span>All Sections</span>
            </Link>
          </div>
        </div>
      </div>
      {/* // <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <input
              type="text"
              id="search_criteria"
              className="form-control"
              placeholder="Search for section.."
            />
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
                    <th>ID</th>
                    <th>Section Name</th>
                    <th>Section Image</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Sr</th>
                    <th>ID</th>
                    <th>Section Name</th>
                    <th>Section Image</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody id="myTable_row">
                {AllSoundsSectionApi.map((curElem) => {
                    const {
                      Sr,
                      ID,
                      SectionName,
                      SectionImg,
                      Created,
                    } = curElem;
                    return (
                      <>

                  <tr>
                    <td>{Sr}</td>
                    <td>{ID}</td>
                    <td>{SectionName}</td>
                    <td>
                      <img
                        src={SectionImg}
                        style={{ maxWidth: "100px" }}
                        className="img-thumbnail"
                      />
                    </td>
                    <td> {Created}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#myModalEditSection"
                      >
                        <i className="fas fa-edit"></i>
                        {/* <!-- The Modal for Add Section--> */}
                        <div class="modal fade" id="myModalEditSection">
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
                                        placeholder="Devotional"
                                      />
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
                                      Section Pic:
                                    </label>
                                    <div className="col-sm-8 ">
                                      <img
                                        src="/images/devo.png"
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
                                  Update Section
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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
               
                  <li className="page-item active">
                    <Link className="page-link" to="/">
                      1
                    </Link>
                  </li>
               
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
