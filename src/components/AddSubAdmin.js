import React, { useState } from 'react'

export default function AddSubAdmin() {
    const [email_id, setEmail_id] = useState("");
    const [password, setPassword] = useState("");
    
     function saveSub_admin() {
      console.log(email_id, password);
      
      let data ={
        email_id: email_id,
        password: password,
        login_type: "SUB_ADMIN"
    };
      fetch("https://api.uwolite.com/addadminuser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.warn(data));
       
    }
    return (
        <>
        <div className="container-fluid ml-4">
   <div className="d-sm-flex align-items-center justify-content-between mb-4">
       <h1 className="h3 mb-0 text-gray-800">Add Sub Admin</h1>
   </div>


<form >
   <div className="form-group row">
       <label htmlFor="email" className="col-sm-2 control-label">Email: </label>
       <div className="col-sm-6">
           <input type="email" name="email" 
        //    id="user_email" 
           required className="form-control"
           value={email_id} onChange={(e)=>{setEmail_id(e.target.value)}}/>
       </div>
   </div>
   <div className="form-group row">
       <label htmlFor="lname" className="col-sm-2 control-label">Password: </label>
       <div className="col-sm-6">
           <input type="password" name="pass" required 
        //    id="user_pass" 
           className="form-control"
           value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
       </div>
   </div>

   <div className="form-group row">
       <div className="col-sm-4"></div>
       <div className="col-sm-4"> <button type="submit" className=" btn btn-success" onClick={saveSub_admin}>Register</button></div>
       <div className="col-sm-4"></div>
   </div>
</form>

</div>
   </>
    )
}
