import React from "react";

const UserProfile = () => {
  return (
    <div>
      <div className="container-fluid">
        <h2 className="title ml-3">User Profile</h2>
        <div className="row ">
          <div className="col-md-8">
            <form method="post" action="" className="ml-3">
              <div className="form-group row">
                <label for="fname" className="col-sm-2 control-label">
                  User Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="hidden"
                    name="fb_id"
                    value="16365312341776894799"
                    id="fb_id"
                    className="form-control"
                  />
                  <input
                    type="text"
                    name="username"
                    value="@fitness1319244924"
                    id="user_name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="fname" className="col-sm-2 control-label">
                  First Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="first_name"
                    value="fitness"
                    id="user_first_name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="lname" className="col-sm-2 control-label">
                  Last Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="last_name"
                    value="club"
                    id="user_last_name"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="lname" className="col-sm-2 control-label">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="email"
                    value=""
                    id="user_email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="lname" className="col-sm-2 control-label">
                  Phone:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="phone"
                    value=""
                    id="user_phone"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group row">
                <label for="gender" className="col-sm-2 control-label">
                  Gender:
                </label>
                <div className="col-sm-10">
                  <select
                    name="gender"
                    id="user_gender"
                    className="form-control"
                  >
                    <option value="">Not set </option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label for="profilepic" className="col-sm-2 control-label">
                  User Bio:
                </label>
                <div className="col-sm-10">
                  <textarea
                    type="text"
                    className="form-control"
                    name="description"
                    id="description"
                  >
                    uwo video user
                  </textarea>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                  <button type="submit" className="btn btn-success w-50">
                    Update
                  </button>
                </div>
                <div className="col-sm-4"></div>
              </div>
            </form>
          </div>

          <div className="col-md-4">
            <form
              id="viewUser"
              method="post"
              action="dashboard.php?p=users&action=editprofilepic"
              enctype="multipart/form-data"
            >
              <div className="user-avatar">
                <input
                  type="hidden"
                  name="fb_id"
                  value="16365312341776894799"
                  id="fb_id"
                  className="form-control"
                />
                <img
                  src="https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16365312341776894799_1571770060.jpg"
                  alt="user_profile"
                  style={{ maxWidth: "200px" }}
                  className="img-thumbnail"
                />
              </div>
              <div className="row my-3">
                <div className="col-sm-2">
                  <button type="button" className="btn btn-info ml-2">
                    <i className="fas fa-edit"></i>
                  </button>
                </div>
                <div className="col-sm-6">
                  <button type="submit" className="btn btn-success">
                    Change Pic
                  </button>
                </div>
                <div className="col-sm-4"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
