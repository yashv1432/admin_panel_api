import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function AppUsers() {
  const [user_count, setUser_count] = useState([]);
  const [user_id, setUser_id] = useState("");
  const [followers_count, setFollowers_count] = useState("");
  const [followuser, setFollowuser] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  function Appuserapi() {
    // console.warn({ page });

    fetch("https://api.uwolite.com/appuser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "http://localhost:3000": "Access-Control-Allow-Origin",
        //  true: "Access-Control-Allow-Credentials"
      },
      mode: "cors",
      //credentials: "include",
      body: JSON.stringify({ page: currentPage }),
    }).then((result) => {
      console.warn("result", result);
      result.json().then((resp) => {
        setUser_count(resp.user_count);

        console.warn("resp", resp.user_count);
      });
    });
  }
  useEffect(() => {
    Appuserapi();
  }, []);
  const handlePageClick = (data) => {
    console.log(data.selected);
    setCurrentPage(data.selected);
    Appuserapi();
  };
  function Adminincreasefollowers() {
    // console.warn({ page });

    fetch("https://api.uwolite.com/adminincreasefollowers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "http://localhost:3000": "Access-Control-Allow-Origin",
        //  true: "Access-Control-Allow-Credentials"
      },
      mode: "cors",
      //credentials: "include",
      body: JSON.stringify({user_id:user_id, followers_count:followers_count}),
    }).then((result) => {
      console.warn("result", result);
      result.json().then((resp) => {
        setFollowuser(resp.followuser);

        console.warn("resp", resp.user_count);
      });
    });
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Users</h1>
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
              onkeyup="usersearch_criteria(this.value)"
              placeholder="Search for names.."
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
                    <th>Name</th>
                    <th>Username</th>
                    <th>Following</th>
                    <th>Followers</th>
                    <th>Profile Pic</th>
                    {/* <th>Device</th> */}
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* <tfoot>
                  <tr>
                    <th>Sr</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Pic</th>
                    <th>Device</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </tfoot> */}
                <tbody id="myTable_row">
                  {user_count.map((item, key) => (
                    //  {AppUserApi.map((curElem) => {
                    // //   const {
                    // //     id,
                    // //     SNo,
                    // //     RegNo,
                    // //     Name,
                    // //     Username,
                    // //     Image,
                    // //     Device,
                    // //     Date,
                    // //   } = curElem;
                    //   return (
                    <>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.user_id}</td>
                        <td>
                          {item.first_name} {item.last_name}
                        </td>
                        <td>{item.username}</td>
                        <td>180</td>
                        <td>100</td>
                        <td >
                          <img
                            src={item.profile_pic}
                            style={{ width: "100px" }}
                            className="img-thumbnail"
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src =
                                "https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg";
                            }}
                          />
                        </td>
                        
                        {/* <td>{item.user_info.device}</td> */}
                        <td>{item.createdAt}</td>
                        <td>
                          <Link
                            to="/"
                            style={{ color: "red", textDecoration: "none" }}
                          >
                            <i
                              className="fas fa-ban"
                              onClick={() => {
                                alert("Are sure want to delete??");
                              }}
                            ></i>
                          </Link>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/UserProfile"
                          >
                            <i className="fas fa-user ml-2"></i>
                            <br />
                          </Link>
                          <button
                            type="button"
                            className="btn btn-info my-1"
                            data-toggle="modal"
                            data-target="#myModalAppUser"
                           
                          >
                            <i className="fas fa-plus"></i>
                            {/* <!-- The Modal for Add Section--> */}
                            <div  class="modal fade" id="myModalAppUser" role="dialog" aria-labelledby="myModalAppUserLabel" aria-hidden="true">
                              <div class="modal-dialog" >
                                <div class="modal-content">
                                  {/* <!-- Modal Header --> */}
                                  <div class="modal-header">
                                    <h5 class="modal-title text-dark " id="myModalAppUserLabel">
                                      Increase Followers
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
                                          Followers Count
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="number"
                                            name="sound_name"
                                            id="sound_name"
                                            data-keyboard="false"
                                            required
                                            className="form-control"
                                            value={followers_count}
                                            onChange={(e) => {
                                              setFollowers_count(e.target.value);
                                            }}
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
                                      onClick={Adminincreasefollowers}
                                    >
                                      Add Now
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </button>
                        </td>
                      </tr>

                      {/*);
                   })}*/}
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
  );
}
