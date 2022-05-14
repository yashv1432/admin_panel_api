import React from 'react'
import { Link } from "react-router-dom"; 
import AdminVideosApi from "../Content-API/AdminVideosApi";

export default function AdminVideos() {
    return (
        <div>
           <div className="container-fluid">
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <div>
		<h1 className="h3 mb-0 text-gray-800">Admin Videos
				<Link to="/AddVideos" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-plus fa-sm text-white-50"></i>Videos</Link>
		</h1>
		</div>
		<Link to="/AllVideos"
                className=" links_sublinks  links_sublinks_active  "
                style={{marginLeft: '22px'}}>
                <span>Users Videos</span>
        </Link>
    </div>
	</div>
		
						{/* <!-- Begin Page Content --> */}
<div className="container-fluid">

{/* <!-- DataTales Example --> */}
<div className="card shadow mb-4">
	<div className="card-header py-3">
		<input type="text" id="search_criteria" className="form-control" onKeyUp="videosearch_criteria(this.value)"
			placeholder="Search for videos.."/>
	</div>
	<div className="card-body">
		<div className="table-responsive">
			<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
				<thead>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>Video ID</th> --> */}
						<th>Play Preview</th>
						<th>Username</th>
						<th>Sound Name</th>
						<th>Likes</th>
						<th>Views</th>
						<th>Section</th>
						{/* <!-- <th>upload by </th> --> */}
						<th>Comments</th>
						<th>Created</th>
						<th>Action</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>Video ID</th> --> */}
						<th>Play Preview</th>
						<th>Username</th>
						<th>Sound Name</th>
						<th>Likes</th>
						<th>Views</th>
						<th>Section</th>
						{/* <!-- <th>upload by </th> --> */}
						<th>Comments</th>
						<th>Created</th>
						<th>Action</th>
					</tr>
				</tfoot>
				<tbody id="myTable_row">
				{AdminVideosApi.map((curElem) => {
                    const {
                      Sr,
                      PosterImg,
                      PlayPreview,
                      UserName,
                      SoundName,
                      Likes,
                      Views,
                      Section,
                      Comments,
                      Created,
                    } = curElem;
                    return (
                      <>
										<tr>
						<td>{Sr}</td>
						{/* <!-- <td></td> --> */}
						<td>
						<video width="120" height="100" poster={PosterImg} controls>
						<source src={PlayPreview} type="video/mp4"/>
						</video>
						</td>
						<td>{UserName}</td>
						<td> {SoundName}</td>
						<td> {Likes}</td>
						<td> {Views}</td>
						<td> {Section} </td>
						{/* <!-- <td>  </td> --> */}
						<td> {Comments} </td>
						<td> {Created} </td>
						<td>
						<Link type="button" className="btn btn-primary my-1" to="/AllVideoComments"><i className="fas fa-comment"></i></Link>
						<button type="button" className="btn btn-info my-1 ml-2" onClick="bulkcomments(50548)"
						data-bs-toggle="modal"
						data-bs-target="#myModal111"> <i className="fas fa-users"></i> </button>
   {/* <!-- The Modal for Add Section--> */}
   <div class="modal fade" id="myModal111">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              {/* <!-- Modal Header --> */}
                              <div class="modal-header">
                                <h4 class="modal-title">Bulk Comments</h4>
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
                                      className="col-sm-4 control-label"
                                      style={{ fontSize: 17 }}
                                    >
                                      Comment Count
                                    </label>
                                    <div className="col-sm-8">
                                      <input
                                        type="text"
                                        name="sound_name"
                                        id="sound_name"
                                        required
                                        className="form-control"
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
                                  Add Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
						<button type="button" className="btn btn-success my-1 ml-2" onClick="addLikesView('50548','1000','2000')"
						data-bs-toggle="modal"
						data-bs-target="#myModal22"><i className="fas fa-thumbs-up"></i></button>
						   <div class="modal fade" id="myModal22">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              {/* <!-- Modal Header --> */}
                              <div class="modal-header">
                                <h4 class="modal-title">Add Likes & view</h4>
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
                                      className="col-sm-4 control-label"
                                      style={{ fontSize: 17 }}
                                    >
                                      Video Like
                                    </label>

                                    <div className="col-sm-8">
                                      <input
                                        type="text"
                                        name="sound_name"
                                        id="sound_name"
                                        required
                                        className="form-control"
                                        value="800"
                                      />
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label
                                      for="fname"
                                      className="col-sm-4 control-label"
                                      style={{ fontSize: 17 }}
                                    >
                                      Video Like
                                    </label>
                                    <div className="col-sm-8">
                                      <input
                                        type="text"
                                        name="sound_name"
                                        id="sound_name"
                                        required
                                        className="form-control"
                                        value="1601"
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
                                  Submit Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
						<button type="button" className="btn btn-info my-1 ml-2" onClick="addDiscovery('50548') "
						data-bs-toggle="modal"
						data-bs-target="#myModal33"> <i className="fas fa-plus-square"></i></button>
						    <div class="modal fade" id="myModal33">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              {/* <!-- Modal Header --> */}
                              <div class="modal-header">
                                <h4 class="modal-title">Attach with Discovery</h4>
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
                                      for="profilepic"
                                      className="col-sm-4 control-label text-dark"
                                      style={{ fontSize: 17 }}
                                    >
                                      Select Section
                                    </label>
                                    <div className="col-sm-8">
                                      <select
                                        name="gender"
                                        id="user_gender"
                                        className="form-control"
                                      >
                                        <option value="yes">
                                          welcome2022
                                        </option>
                                        <option value="no">uwokiyaari</option>
                                      </select>
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
                                  Submit Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
						{/* <!-- <button type="button"><i className="fas fa-minus-circle"></i></button> --> */}
												<button type="button" className="btn btn-info my-1 ml-2" onClick="editvideos('50548')"
												data-bs-toggle="modal"
												data-bs-target="#myModal44">
                        <i className="fas fa-edit"></i>
                        </button>
						<div class="modal fade" id="myModal44">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              {/* <!-- Modal Header --> */}
                              <div class="modal-header">
                                <h4 class="modal-title">Edit video</h4>
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
                                      className="col-sm-4 control-label"
                                      style={{ fontSize: 17 }}
                                    >
                                      Video description
                                    </label>

                                    <div className="col-sm-8">
                                      <input
                                        type="text"
                                        name="sound_name"
                                        id="sound_name"
                                        required
                                        className="form-control"
                                        value="#UnlimiterU #UWOTrend"
                                      />
                                    </div>
                                    <div className="form-group row">
                                      <label
                                        for="profilepic"
                                        className="col-sm-4 control-label text-dark"
                                        style={{ fontSize: 17 }}
                                      >
                                        Select Category
                                      </label>
                                      <div className="col-sm-8">
                                        <select
                                          name="gender"
                                          id="user_gender"
                                          className="form-control"
                                        >
                                          <option value="yes">Dance</option>
                                          <option value="no">
                                            Entertainment
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group row">
                                    <label
                                      for="profilepic"
                                      className="col-sm-4 control-label text-dark"
                                      style={{ fontSize: 17 }}
                                    >
                                      Select Language
                                    </label>
                                    <div className="col-sm-8">
                                      <select
                                        name="gender"
                                        id="user_gender"
                                        className="form-control"
                                      >
                                        <option value="yes">Hindi</option>
                                        <option value="no">English</option>
                                      </select>
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
												<a type="button" className="btn btn-danger my-1 ml-2" href="?p=all_videos&page=adminVideos&curr_page=1&action=deleteVideo&id=50548"
												
												 onClick={() => {
													alert("Are sure want to delete??");
												  }}
												><i className="fas fa-minus-circle"></i></a>
	
						
						</td>
					</tr>
								
                    </>
                    );
                  })}
									</tbody>
			</table>
			<nav aria-label="...">
				<ul className="pagination justify-content-end">
				{AdminVideosApi.map((curElem) => {
                    const {PageNo} = curElem;
                    return (
										<li className="page-item active"><Link className="page-link"
							to="/">
							1</Link></li>
);
})}
							
									</ul>
			</nav>
		</div>
	</div>
</div>

</div>
        </div>
    )
}
