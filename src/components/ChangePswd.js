import React from "react";

const ChangePswd = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4 ml-5">
          <h1 className="h3 mb-0 text-gray-800">Change Password</h1>
        </div>

        <form id="changepass" method="post" className="ml-5">
          <div className="row form-group">
            <div className="col-sm-6">
              <label for="">Old Password</label>
              <input
                type="password"
                id="oldpas"
                className="form-control"
                name="oldpas"
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-6">
              <label for="">New Password</label>
              <input
                type="password"
                id="newpas"
                name="newpas"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-sm-6">
              <label for="">Re type new password</label>
              <input
                type="password"
                id="renewpas"
                name="renewpas"
                className="form-control"
                required
              />
            </div>
          </div>
          <p>
            <input
              type="submit"
              value="Update Password"
              className="btn btn-success"
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default ChangePswd;
