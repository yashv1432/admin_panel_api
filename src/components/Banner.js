import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clickable, NonClickable } from "../Content-API/BannerApi";

export default function Banner() {
  const [ClickNonClick, setClickNonClick] = useState("active");
  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">All Banners</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-clickable-tab"
                  data-toggle="pill"
                  href="#pills-clickable"
                  role="tab"
                  aria-controls="pills-clickable"
                  aria-selected="true"
                  onClick={() => setClickNonClick("active")}
                >
                  Clickable
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-non-clickable-tab"
                  data-toggle="pill"
                  href="#pills-non-clickable"
                  role="tab"
                  aria-controls="pills-non-clickable"
                  aria-selected="false"
                  onClick={() => setClickNonClick("NonActive")}
                >
                  Non-clickable
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            {ClickNonClick === "active" ? (
              <BuildClickNonClickBennerBlock
                apiData={Clickable}
                showFields={true}
              />
            ) : (
              <BuildClickNonClickBennerBlock
                apiData={NonClickable}
                showFields={false}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

const BuildClickNonClickBennerBlock = ({ apiData, showFields }) => {
  return (
    <div className="tab-content" id="pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="pills-clickable"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">
          {/* <!-- DataTales Example --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Our Banner</h6>
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
                      <th>Banner</th>
                      {showFields ? <th>Click_url</th> : <></>}
                      <th>Clickable</th>
                      <th>Active</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Sr</th>
                      <th>Banner</th>
                      {showFields ? <th>Click_url</th> : <></>}
                      <th>Clickable</th>
                      <th>Active</th>
                      <th>Action</th>
                    </tr>
                  </tfoot>
                  <tbody id="myTable_row">
                    {apiData.map((curElem) => {
                      const { id, SNo, Banner, ClickURL, Clickable, Active } =
                        curElem;
                      return (
                        <tr>
                          <td>{SNo}</td>
                          <td>
                            <img
                              src={Banner}
                              style={{ width: "100px" }}
                              className="img-thumbnail"
                            />
                          </td>
                          {showFields ? (
                            <td>
                              <Link href="aa" target="_blank">
                                {ClickURL}
                              </Link>
                            </td>
                          ) : (
                            <></>
                          )}
                          <td>{Clickable}</td>
                          <td>{Active}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-info"
                              data-bs-toggle="modal"
                              data-bs-target="#myModalBanner"
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
                            {/* <!-- The Modal for Add Section--> */}
                            <div class="modal fade" id="myModalBanner">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  {/* <!-- Modal Header --> */}
                                  <div class="modal-header">
                                    <h5 class="modal-title text-dark">
                                      Edit Banner
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
                                          Click Url
                                        </label>
                                        <div className="col-sm-8">
                                          <input
                                            type="text"
                                            name="sound_name"
                                            id="sound_name"
                                            required
                                            className="form-control"
                                            placeholder="aa"
                                          />
                                        </div>
                                      </div>

                                      <div className="form-group row">
                                        <label
                                          for="profilepic"
                                          className="col-sm-4 control-label text-dark"
                                          style={{ fontSize: 17 }}
                                        >
                                          Clickable
                                        </label>
                                        <div className="col-sm-8">
                                          <select
                                            name="gender"
                                            id="user_gender"
                                            className="form-control"
                                          >
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <label
                                          for="profilepic"
                                          className="col-sm-4 control-label text-dark"
                                          style={{ fontSize: 17 }}
                                        >
                                          Active
                                        </label>
                                        <div className="col-sm-8">
                                          <select
                                            name="gender"
                                            id="user_gender"
                                            className="form-control"
                                          >
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="form-group row">
                                        <label
                                          for="profilepic"
                                          className="col-sm-4 control-label text-dark"
                                          style={{ fontSize: 17 }}
                                        >
                                          Banner New Pic
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
                                          Banner Old Pic
                                        </label>
                                        <div className="col-sm-8 ">
                                          <img
                                            src="/images/uwo.jpg"
                                            width={"100px"}
                                            height={"100px"}
                                            style={{
                                              marginRight: "12rem",
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
                    {apiData.map((curElem) => {
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
        {/* <!-- /.container-fluid --> */}
      </div>
    </div>
  );
};
