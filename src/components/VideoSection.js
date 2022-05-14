import React, { useState } from "react";
import { VideoSectionApi } from "../Content-API/VideoSectionApi";
import { Link } from "react-router-dom";

const VideoSection = () => {
  const [state, setstate] = useState(VideoSectionApi);
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Video Sections</h1>
        </div>
      </div>
      <div className="container-fluid">
        {/* <!-- DataTales Example --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <input
              type="text"
              id="search_criteria"
              className="form-control"
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
                    <th>Video ID</th>
                    <th>User_ID</th>
                    <th>Video</th>
                    <th>Description</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Sr</th>
                    <th>Video ID</th>
                    <th>User_ID</th>
                    <th>Video</th>
                    <th>Description</th>
                    <th>Created</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody id="myTable_row">
                  {VideoSectionApi.map((curElem) => {
                    const {
                      id,
                      SNo,
                      VideoID,
                      UserID,
                      Video,
                      Description,
                      Date,
                    } = curElem;
                    return (
                      <tr>
                        <td>{SNo}</td>
                        <td>{VideoID}</td>
                        <td>{UserID}</td>
                        <td>
                          <video
                            width="120"
                            height="100"
                            poster="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/1638337367_1527578352.jpg"
                            controls
                          >
                            <source src={Video} type="video/mp4" />
                          </video>
                        </td>
                        <td>{Description}</td>
                        <td>{Date}</td>
                        <td>
                          <button type="button" className="btn btn-danger">
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
                  {VideoSectionApi.map((curElem) => {
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
};

export default VideoSection;
