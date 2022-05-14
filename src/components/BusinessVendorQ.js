import React , {useState} from "react";
import { Link } from "react-router-dom";
import { Pending, Completed } from "../Content-API/BusinessVendorApi";

export default function BusinessVendorQ() {
	const [PendingCompleted, setPendingCompleted] = useState("active")
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Business Vendor</h1>
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
                  id="pills-pending-tab"
                  data-toggle="pill"
                  href="#pills-pending"
                  role="tab"
                  aria-controls="pills-pending"
                  aria-selected="true"
				  onClick={() => setPendingCompleted("active")}
                >
                  Pending
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
				  onClick={() => setPendingCompleted("inActive")}
                >
                  Completed
                </a>
              </li>
            </ul>
            {/* <!-- <input type="text" id="search_criteria" className="form-control" onkeyup="videosearch_criteria(this.value)"
						placeholder="Search for videos.."> --> */}
          </div>
          <div className="card-body">
		  {PendingCompleted === "active" ? (
              <BuildPendingCompletedBlock apiData={Pending} />
            ) : (
              <BuildPendingCompletedBlock apiData={Completed} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
const BuildPendingCompletedBlock =({ apiData}) => {
	return(
		<div className="tab-content" id="pills-tabContent">
		<div
		  className="tab-pane fade show active"
		  id="pills-pending"
		  role="tabpanel"
		  aria-labelledby="pills-home-tab"
		>
		  <div className="container-fluid">
			<div className="d-sm-flex align-items-center justify-content-between mb-4">
			  <h1 className="h3 mb-0 text-gray-800">
				No record found in vendor
			  </h1>
			</div>
		  </div>

		
		{/* </div> */}
		{/* <div
		  className="tab-pane fade show"
		  id="pills-completed"
		  role="tabpanel"
		  aria-labelledby="pills-completed-tab"
		> */}
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
                        <th>Name</th>
                        {/* <!-- <th>Fb_ID</th> --> */}
                        <th>Profile</th>
                        <th>Status</th>
                        {/* <!-- <th>Description</th> --> */}
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Sr</th>
                        <th>Name</th>
                        {/* <!-- <th>Fb_ID</th> --> */}
                        <th>Profile</th>
                        <th>Status</th>
                        {/* <!-- <th>Description</th> --> */}
                        <th>Created</th>
                        <th>Action</th>
                      </tr>
                    </tfoot>
                    <tbody id="myTable_row">
					{apiData.map((curElem) => {
		const { Sr, Name, Profile, Status, Created } = curElem;
		return (
                      <tr>
                        <td>{Sr}</td>
                        <td>{Name}</td>
                        {/* <!-- <td></td> --> */}
                        <td>
                          <img
                            src={Profile}
                            style={{ maxWidth: "100px" }}
                            className="img-thumbnail"
                          />{" "}
                        </td>
                        <td>{Status}</td>
                        <td>{Created}</td>
                        <td>
                          <Link
                            type="button"
                            className="btn btn-info"
                            to="/AnswerDetailsVendor"
                          >
                            {" "}
                            <i className="fas fa-eye"></i>
                          </Link>
                          <Link
                            type="button"
                            className="btn btn-success ml-2"
                            to="/BusinessVendorQ"
                          >
                            {" "}
                            <i className="fas fa-check"></i>
                          </Link>
                          <Link
                            type="button"
                            className="btn btn-danger ml-2"
                            to="/BusinessVendorQ"
                          >
                            <i className="fas fa-minus-circle"></i>
                          </Link>
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
		);
	};
