import React from "react";

export default function UserMigration() {
  return (
    <>
      <body id="page-top">
        <div id="wrapper">
          <div className="container-fluid ml-4">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">User migration</h1>
            </div>
            <div className="row form-group">
              <div className="col-sm-4">
                <label htmlFor="">Old User Name</label>
                <input type="hidden" id="old_uid" />
                <input
                  type="text"
                  id="old_id"
                  autocomplete="off"
                  onkeyup="showoldResult(this.value)"
                  className="form-control"
                  name="oldusername"
                  required=""
                />
                <div id="live_oldsearch"></div>
              </div>
              <div className="col-sm-4">
                <label htmlFor="">New User Name</label>
                <input type="hidden" id="new_uid" />
                <input
                  type="text"
                  id="new_id"
                  autocomplete="off"
                  onkeyup="shownewResult(this.value)"
                  name="newusername"
                  className="form-control"
                  required=""
                />
                <div id="live_newsearch"></div>
              </div>
              <div className="col-sm-4">
                <br />
                <p>
                  <input
                    type="submit"
                    value="Migrate"
                    className="btn btn-success"
                    onClick="confirm_migrate()"
                  />
                </p>
              </div>
            </div>
            <div
              className="text-center"
              id="loader"
              style={{ display: "none" }}
            >
              <div
                className="spinner-border"
                style={{ width: "4rem", height: "4rem" }}
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-10">
                <h3>Old User Data</h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Username</th>
                      <th>Video Count</th>
                    </tr>
                  </thead>
                  <tbody id="old_user_data">
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-sm-10">
                <h3>New User Data</h3>
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
      </body>
    </>
  );
}
