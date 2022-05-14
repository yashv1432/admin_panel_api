import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
// import DummyUserApi from "../Content-API/DummyUserApi";

export default function DummyUsers() {
  const [user_count, setUser_count] = useState([]);
  // const [items , setItems] = useState([]);
  // const [currentPage, setCurrentpage] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  // const [isLoaded, setisLoaded] = useState(false);

  function dummyuserapi() {
    fetch("https://api.uwolite.com/dummyusers/?page=${currentPage}", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
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
    dummyuserapi();
  }, []);

  const handlePageClick = (data) => {
    console.log(data.selected);
    setCurrentPage(data.selected);
    dummyuserapi();
  };

  return (
    <div>
      {/* {user_count.map((item, key) => <> */}
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dummy Users</h1>
          <Link
            to="/AddUsers"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-plus fa-sm text-white-50"></i> Add Users
          </Link>
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
                    <th>Created By</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Pic</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="myTable_row">
                  {user_count.map((item, key) => (
                    <>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.first_name} {item.last_name}</td>
                        <td>{item.username}</td>
                        <td>
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
                            to="/UserProfile"
                            style={{ textDecoration: "none" }}
                          >
                            <i className="fas fa-user ml-2"></i>
                          </Link>
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
  );
}
