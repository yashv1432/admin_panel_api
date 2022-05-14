import React from "react";
// import { Link } from "react-router-dom";
import ShowAllCommentsApi from "../Content-API/ShowAllCommentsApi";

const ShowAllComments = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">All Comments</h1>
        </div>
      </div>
      <div className="container-fluid">
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">User Name</h6>
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
                    <th>Comments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Sr</th>
                    <th>Comments</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody id="myTable_row">
                  {ShowAllCommentsApi.map((curElem) => {
                    const { Sr, Comments } = curElem;
                    return (
                      <>
                        <tr>
                          <td>{Sr}</td>
                          <td>{Comments}</td>
                          <td>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowAllComments;
