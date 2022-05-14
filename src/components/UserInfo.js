import React from 'react'

const UserInfo = () => {
  return (
      <>
      <div className='ml-3 mr-3'>


   
       <div class="mb-3 row">
    <div class="col-sm-2 col-form-label">Profile Pic :</div>
    <div class="col-sm-10">
     <img
                            src={"https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16365312341776894799_1571770060.jpg"}
                            style={{ width: "100px" }}
                            className="img-thumbnail"
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null; // prevents looping
                              currentTarget.src =
                                "https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/411002053383805_140311940.jpg";
                            }}
                          />
    </div>
  </div>
       <div class="mb-3 row">
    <div class="col-sm-2 col-form-label">User Name :</div>
    <div class="col-sm-10">
      <div class="form-control" >user name</div>
    </div>
  </div>
  <div class="mb-3 row">
    <div class="col-sm-2 col-form-label">Full Name :</div>
    <div class="col-sm-10">
      <div class="form-control" >full name</div>
    </div>
  </div>
  <div class="mb-3 row">
    <div class="col-sm-2 col-form-label">Bio :</div>
    <div class="col-sm-10 row-3">
    <div class="form-control"  rows="3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, dolorum.</div>
    </div>
  </div>
  <div class="mb-3 row">
    <div class="col-sm-2 col-form-label">Email Id :</div>
    <div class="col-sm-10">
      <div class="form-control" >emailid</div>
    </div>
  </div>
  <div class="mb-3 row">
    <div class="col-sm-2 col-form-label">Mobile Number :</div>
    <div class="col-sm-10">
      <div class="form-control" >1010101010</div>
    </div>
  </div>
  <div class="mb-3 row">
    <div class="col-sm-2 col-form-label">Gender :</div>
    <div class="col-sm-10">
      <div class="form-control" >gender</div>
    </div>
  </div>
  <div class="mb-3 row">
    <div class="col-sm-2 col-form-label">Date of Birth :</div>
    <div class="col-sm-10">
      <div class="form-control" >dd/mm/yyyy</div>
    </div>
  </div>
  </div>
    </>
  )
}

export default UserInfo