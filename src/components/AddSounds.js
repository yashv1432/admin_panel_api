import React from "react";

const AddSounds = () => {
  return (
    <div>
      <div className="container-fluid">
        <h2 className="title pb-3">Add New Sound</h2>

        <form
          id="addsound"
          method="post"
          enctype="multipart/form-data"
          action=""
        >
          <div className="form-group row">
            <label for="fname" className="col-sm-2 control-label">
              Sound Name:
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="sound_name"
                id="sound_name"
                required
                className="form-control"
                placeholder="sound name"
              />
            </div>
          </div>
          <div className="form-group row">
            <label for="lname" className="col-sm-2 control-label">
              Description:
            </label>
            <div className="col-sm-8">
              <textarea
                type="text"
                className="form-control"
                required
                name="description"
                id="description"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label for="lname" className="col-sm-2 control-label">
              Artist:
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                name="artist"
                id="artist"
                required
                className="form-control"
                placeholder="artist"
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="gender" className="col-sm-2 control-label">
              Sound Section:
            </label>
            <div className="col-sm-8">
              <select name="section_name" required className="form-control">
                <option value="">Select Sound Section</option>
                <option value="">Devotional</option>
                <option value="">Comedy</option>
                <option value="">Retro</option>
                <option value="">Album</option>
                <option value="">Filmy</option>
                <option value="">Punjabi Song</option>
                <option value="">Hollywood</option>
                <option value="">Trending</option>
                <option value="">Dialogue</option>
                <option value="">UWO Hits</option>
                <option value="">Evergreen</option>
                <option value="">Shayari</option>
                <option value="">Christmas 2020</option>
                <option value="">Romantic</option>
                <option value="">Motivational </option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label for="profilepic" className="col-sm-2 control-label">
              Upload mp3 file:
            </label>
            <div className="col-sm-8 ">
              <input
                type="file"
                name="sound_upload"
                id="sound_upload"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group row">
            <label for="profilepic" className="col-sm-2 control-label">
              Upload image:
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
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <button type="submit" className=" btn btn-success pl-3 pr-3">
                Upload
              </button>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSounds;
