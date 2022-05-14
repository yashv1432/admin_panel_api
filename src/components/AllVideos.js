import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
// import AllVideosApi from "../Content-API/AllVideosApi";

export default function AllVideos() {
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [video_count, setVideo_count] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [page, setPage] = useState("")

  function dashvideoapi() {
    console.warn({ start_date, end_date });

    fetch("https://api.uwolite.com/admindashboardvideo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "http://localhost:3000": "Access-Control-Allow-Origin",
        //  true: "Access-Control-Allow-Credentials"
      },
      mode: "cors",
      //credentials: "include",
      body: JSON.stringify({
        end_date: end_date,
        start_date: start_date,
        page: currentPage,
      }),
    }).then((result) => {
      console.warn("result", result);
      result.json().then((resp) => {
        setVideo_count(resp.video_count);
        console.warn("resp", resp);
      });
    });
  }
  useEffect(() => {
    dashvideoapi();
  }, []);
  const handlePageClick = (data) => {
    console.log(data.selected);
    setCurrentPage(data.selected);
    dashvideoapi();
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Users Videos</h1>
          <div>
            <Link
              to="/AdminVideos"
              className=" links_sublinks    "
              style={{ marginLeft: "22px" }}
            >
              <span>Admin Videos</span>
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12 col-lg-4">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={start_date}
                  onChange={(e) => {
                    setStart_date(e.target.value);
                  }}
                  className="text-gray-600 border-radius p-1 calender-mobile-view"
                />
              </div>
              <div className="col-lg-1 col-12">
                <label for="date" className="text-gray-600 mrgn-none">
                  To:
                </label>
              </div>
              <div className="col-lg-4 col-12">
                <input
                  type="date"
                  id="date"
                  value={end_date}
                  onChange={(e) => {
                    setEnd_date(e.target.value);
                  }}
                  name="date"
                  className="text-gray-600 border-radius mrgn-none p-1 calender-mobile-view"
                />
              </div>
              <div className="col-2">
                <button
                  className="btn-show-details btn-hide btn-display"
                  onClick={dashvideoapi}
                >
                  <i className="fas fa-download fa-sm text-white-50"></i>
                </button>
              </div>
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
                onKeyUp="videosearch_criteria(this.value)"
                placeholder="Search for videos.."
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
                      {/* <!-- <th>Video ID</th> --> */}
                      <th>Play Preview</th>
                      <th>Username</th>
                      <th>Sound Name</th>
                      <th>Likes</th>
                      <th>Views</th>
                      <th>Section</th>
                      {/* <!-- <th>upload by </th> --> */}
                      <th>Comments</th>
                      <th>Created</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Sr</th>
                      {/* <!-- <th>Video ID</th> --> */}
                      <th>Play Preview</th>
                      <th>Username</th>
                      <th>Sound Name</th>
                      <th>Likes</th>
                      <th>Views</th>
                      <th>Section</th>
                      {/* <!-- <th>upload by </th> --> */}
                      <th>Comments</th>
                      <th>Created</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody id="myTable_row">
                    {video_count.map((item, key) => (
                      <>
                        <tr>
                          <td>{item.id}</td>
                          {/* <!-- <td></td> --> */}
                          <td>
                            <video
                              width="120"
                              height="100"
                              poster={item.thum}
                              controls
                            >
                              <source src={item.video} type="video/mp4" />
                            </video>
                          </td>
                          <td>{item.user.first_name} {item.user.last_name}</td>
                          <td>{item.sound.sound_name} </td>
                          <td>{item.like_count} </td>
                          <td>{item.view} </td>
                          <td>{item.allow_duet} </td>
                          {/* <!-- <td>  </td> --> */}
                          <td>
                            {item.allow_comments}
                            <Link to="/ShowAllComments">
                              <button
                                className="btn btn-primary btn-sm my-2 pb-4 pt-0"
                                style={{ width: "100px", height: "25px" }}
                              >
                                <span
                                  style={{
                                    fontSize: "10px",
                                    fontFamily: "sans-serif",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Show Comments
                                </span>
                              </button>
                            </Link>
                          </td>
                          <td>{item.createdAt} </td>
                          <td>
                            <Link
                              type="button"
                              className="btn btn-primary mx-2"
                              to="/AllVideoComments"
                            >
                              <i className="fas fa-comment"></i>
                            </Link>
                            <button
                              type="button"
                              className="btn btn-info my-1 ml-2"
                              onClick="bulkcomments(50440)"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal1"
                            >
                              <i className="fas fa-users"></i>
                            </button>
                            {/* <!-- The Modal for Add Section--> */}
                            <div class="modal fade" id="myModal1">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  {/* <!-- Modal Header --> */}
                                  <div class="modal-header">
                                    <h4 class="modal-title">Bulk Comments</h4>
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
                                          Comment Count
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
                                      Add Now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-success my-1 ml-2"
                              onClick="addLikesView('50440','0','0')"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal2"
                            >
                              <i className="fas fa-thumbs-up"></i>
                            </button>
                            <div class="modal fade" id="myModal2">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  {/* <!-- Modal Header --> */}
                                  <div class="modal-header">
                                    <h4 class="modal-title">
                                      Add Likes & view
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
                                          Video Like
                                        </label>

                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            name="sound_name"
                                            id="sound_name"
                                            required
                                            className="form-control"
                                            value="800"
                                          />
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <label
                                          for="fname"
                                          className="col-sm-4 control-label"
                                          style={{ fontSize: 17 }}
                                        >
                                          Video Like
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            name="sound_name"
                                            id="sound_name"
                                            required
                                            className="form-control"
                                            value="1600"
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
                            <button
                              type="button"
                              className="btn btn-info my-1 ml-2"
                              onClick="addDiscovery('50440')"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal3"
                            >
                              {" "}
                              <i className="fas fa-plus-square"></i>
                            </button>
                            <div class="modal fade" id="myModal3">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  {/* <!-- Modal Header --> */}
                                  <div class="modal-header">
                                    <h4 class="modal-title">
                                      Add Likes & view
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
                                          for="profilepic"
                                          className="col-sm-4 control-label text-dark"
                                          style={{ fontSize: 17 }}
                                        >
                                          Select Section
                                        </label>
                                        <div className="col-sm-8">
                                          <select
                                            name="gender"
                                            id="user_gender"
                                            className="form-control"
                                          >
                                            <option value="yes">
                                              uwoinfluencer
                                            </option>
                                            <option value="no">
                                              uwokiyaari
                                            </option>
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
                                      Submit Now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              className="btn btn-warning my-1 ml-2"
                              onClick="editvideos('50440')"
                              data-bs-toggle="modal"
                              data-bs-target="#myModal4"
                            >
                              <i className="fas fa-edit"></i>
                            </button>
                            <div class="modal fade" id="myModal4">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  {/* <!-- Modal Header --> */}
                                  <div class="modal-header">
                                    <h4 class="modal-title">Edit video</h4>
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
                                          Video description
                                        </label>

                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            name="sound_name"
                                            id="sound_name"
                                            required
                                            className="form-control"
                                            value="#UnlimiterU #UWOTrend"
                                          />
                                        </div>
                                        <div className="form-group row mt-4">
                                          <label
                                            for="profilepic"
                                            className="col-sm-4 control-label text-dark"
                                            style={{ fontSize: 17 }}
                                          >
                                            Select Category
                                          </label>
                                          <div className="col-sm-8">
                                            <select
                                              name="gender"
                                              id="user_gender"
                                              className="form-control mx-2"
                                            >
                                              <option value="yes">
                                                Trending
                                              </option>
                                              <option value="no">
                                                Entertainment
                                              </option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <label
                                          for="profilepic"
                                          className="col-sm-4 control-label text-dark"
                                          style={{ fontSize: 17 }}
                                        >
                                          Select Language
                                        </label>
                                        <div className="col-sm-8">
                                          <select
                                            name="gender"
                                            id="user_gender"
                                            className="form-control"
                                          >
                                            <option value="yes">Hindi</option>
                                            <option value="no">English</option>
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
                                      Update
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <a
                              type="button"
                              className="btn btn-danger ml-2"
                              href="?p=all_videos&page=allVideo&curr_page=1&action=deleteVideo&id=50440"
                              // onClick="alert('Are You Sure to delete');"
                              onClick={() => {
                                alert("Are sure want to delete??");
                              }}
                            >
                              <i className="fas fa-minus-circle"></i>
                            </a>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
                <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                onPageChange={handlePageClick}
                // marginPageDisplayed={2}
                pageCount={10}
                // pageRange={10}
                containerClassName={"pagination justify-content-end"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
