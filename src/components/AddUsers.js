import React, { useState } from "react";

const AddUsers = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [gender, setGender] = useState("");
  const [profile_pic, setProfile_pic] = useState("");

  function saveUser() {
    console.log(first_name, last_name, gender, profile_pic);

    let data = {
      first_name: first_name,
      last_name: last_name,
      gender: gender,
    };
    fetch("https://api.uwolite.com/adddummyuser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <div className="container-fluid">
      <h2 className="title">Add New User</h2>

      <form
      // id="addusers"
      // method="post"
      // enctype="multipart/form-data"
      // action="dashboard.php?p=add_users&adminaddusers=ok"
      >
        <div className="form-group row">
          <label for="fname" className="col-sm-2 control-label">
            First Name:{" "}
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="first_name"
              // id="user_first_name"
              required
              className="form-control"
              value={first_name}
              onChange={(e) => {
                setFirst_name(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="lname" className="col-sm-2 control-label">
            Last Name:{" "}
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              name="last_name"
              // id="user_last_name"
              required
              className="form-control"
              value={last_name}
              onChange={(e) => {
                setLast_name(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="gender" className="col-sm-2 control-label">
            Gender:{" "}
          </label>
          <div className="col-sm-8">
            <select
              name="gender"
              // id="user_gender"
              className="form-control"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <option value="">Select Gender</option>
              <option value="m">Male</option>
              <option value="f">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label for="profilepic" className="col-sm-2 control-label">
            Profile Pic:{" "}
          </label>
          <div className="col-sm-8">
            <input
              type="file"
              name="profile_pic"
              // id="user_profile_pic"
              className="form-control"
              value={profile_pic}
              onChange={(e) => {
                setProfile_pic(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
            {" "}
            <button
              type="submit"
              className=" btn btn-success"
              onClick={saveUser}
            >
              Register
            </button>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </form>
      <div className="right col40"></div>
      <div className="clear"></div>
    </div>
  );
};

export default AddUsers;
