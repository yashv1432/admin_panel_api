import React ,{useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
// import ProfileVerificationApi from "../Content-API/ProfileVerificationApi";

export default function ProfileVerification() {
  const [user_count, setUser_count] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  // const [currentPage, setCurrentpage] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  function ProfileVerficationapi() {
    fetch("https://api.uwolite.com/profileverification", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ page: currentPage}),
    }).then((result) => {
      console.warn("result", result);
      result.json().then((resp) => {
        setUser_count(resp.user_count);

        console.warn("resp", resp.user_count);
      });
    });
  }
  useEffect(() => {
    ProfileVerficationapi();
  }, []);
  const handlePageClick = (data) => {
    console.log(data.selected);
    setCurrentPage(data.selected);
    ProfileVerficationapi();
  };
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">All Verification Request</h1>
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
              onChange={(e) => setSearchItems(e.target.value)}
              placeholder="Search for users.."
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
                    {/* <!-- <th>ID</th> --> */}
                    <th>Name</th>
                    <th>Attachment</th>
                    <th>Username</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Sr</th>
                    {/* <!-- <th>ID</th> --> */}
                    <th>Name</th>
                    <th>Attachment</th>
                    <th>Username</th>
                    <th>Attachment</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody id="myTable_row">
                  {user_count
                    .filter((val) => {
                      if (searchItems == "") {
                        return val;
                      } else if (
                        val.user_id
                          .toLowerCase()
                          .includes(searchItems.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((item, key) => (
                      <>
                        <tr>
                          <td>{item.id}</td>
                          {/* <!-- <td></td> --> */}
                          <td>
                            <Link to="/UserInfo" style={{ color: "#858796" }}>
                            {item.user.first_name} {item.user.last_name}
                            </Link>
                          </td>
                          <td>
                            <img
                              src={`data:image/jpeg;base64,${item.attachment}`}
                              style={{ width: "100px" }}
                            />
                          </td>
                          <td>{item.user.username}</td>
                          <td>{item.status}</td>
                          <td>{item.createdAt}</td>
                          <td>
                            <button className="btn btn-success">
                              <i className="fas fa-check"></i>
                            </button>

                            <button
                              className="btn btn-danger ml-2"
                              onClick={() => {
                                alert("Are sure want to decline?");
                              }}
                            >
                              <i className="fas fa-ban"></i>
                            </button>
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
    </>
  );
}
