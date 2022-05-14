import React from "react";

const AddPopularCreater = () => {
  return (
    <div>
      <div className="container-fluid ml-3">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Add Popular Creator</h1>
        </div>
        <div className="row form-group">
          <div className="col-sm-4">
            <label>Find Name</label>
            <input type="hidden" id="new_uid" />
            <input
              type="text"
              id="new_id"
              autoComplete="off"
              name="newusername"
              className="form-control"
              required
            />
            <div id="live_newsearch"></div>
          </div>
          <div className="col-sm-2">
            <label>Ranking</label>
            <input
              type="text"
              id="rank"
              autoComplete="off"
              name="rank"
              className="form-control"
              required
            />
          </div>
          <div className="col-sm-">
            <label>.</label>
            <p>
              <input
                type="submit"
                value="Popular"
                className="btn btn-success"
              />
            </p>
          </div>
        </div>
        <div className="text-center" id="loader" style={{ display: "none" }}>
          <div
            className="spinner-border"
            style={{ Width: "4rem", height: "4rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        <div className="row form-group">
          <div className="col-sm-10">
            <h3>User Details</h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Username</th>
                  <th>Video Count</th>
                </tr>
              </thead>
              <tbody id="new_user_data">
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPopularCreater;
