import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AllSoundsApi from "../Content-API/AllSoundsApi";

const AdminSounds = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">
            All Sounds
            <Link
              to="/AddSounds"
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-3"
            >
              <i className="fas fa-plus fa-sm text-white mb-0"></i> Sound
            </Link>
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
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <input
              type="text"
              id="search_criteria"
              className="form-control"
              onKeyUp="songsearch_criteria(this.value)"
              placeholder="Search for song.."
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
                    <th>Play Preview</th>
                    <th>Sound Name</th>
                    <th>Discription</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Sr</th>
                    <th>ID</th>
                    <th>Play Preview</th>
                    <th>Sound Name</th>
                    <th>Discription</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody id="myTable_row">
                {AllSoundsApi.map((curElem) => {
                    const {
                      Sr,
                      ID,
                      PlayPreview,
                      PlaySound,
                      SoundImg,
                      SoundName,
                      Discription,
                      Created,
                    } = curElem;
                    return (
                      <>
                  <tr>
                    <td>{Sr}</td>
                    <td>{ID}</td>
                    <td>
                      <div
                        style={{
                          background:
                           {PlayPreview},
                 
                          height: "60px",
                          width: "60px",
                          backgroundSize: "cover",
                        }}
                      >
                        <span
                          id="playPauseBtn_11477"
                          style={{
                            position: "absolute",
                            width: "60px",
                            height: "60px",
                            background: "#03030380",
                          }}
                        >
                          <img
                            src={SoundImg}
                            onclick= {PlaySound}
                            style={{
                              width: "30px",
                              marginTop: "15px",
                              marginLeft: "15px",
                            }}
                          />
                        </span>
                        <span
                          id="preview_play_11477"
                          style={{ display: "none" }}
                        ></span>
                      </div>
                    </td>
                    <td>{SoundName} </td>
                    <td>{Discription}</td>
                    <td>{Created}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info"
                        data-bs-toggle="modal"
                        data-bs-target="#myModalEditSound"
                      >
                        <i className="fas fa-edit"></i>
                        {/* <!-- The Modal for Add Section--> */}
                        <div class="modal fade" id="myModalEditSound">
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
                                      style={{ fontSize: 15 }}
                                    >
                                      Sound Name:
                                    </label>
                                    <div className="col-sm-8">
                                      <input
                                        type="text"
                                        name="sound_name"
                                        id="sound_name"
                                        required
                                        className="form-control"
                                        placeholder="Song Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label
                                      for="fname"
                                      className="col-sm-4 control-label text-dark"
                                      style={{ fontSize: 15 }}
                                    >
                                      Sound Description:
                                    </label>
                                    <div className="col-sm-8">
                                      <input
                                        type="text"
                                        name="sound_name"
                                        id="sound_name"
                                        required
                                        className="form-control"
                                        placeholder="Sound Description"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label
                                      for="fname"
                                      className="col-sm-4 control-label text-dark"
                                      style={{ fontSize: 15 }}
                                    >
                                      Sound Artist:
                                    </label>
                                    <div className="col-sm-8">
                                      <input
                                        type="text"
                                        name="sound_name"
                                        id="sound_name"
                                        required
                                        className="form-control"
                                        placeholder="Sound Artist"
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
                                  Update
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
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
              <nav aria-label="...">
                <ul className="pagination justify-content-end">
                {AllSoundsApi.map((curElem) => {
                    const {PageNo} = curElem;
                    return (
                  <li className="page-item active">
                    <Link
                      className="page-link"
                      to="/"
                    >
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
};

export default AdminSounds;
