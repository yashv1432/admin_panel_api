import React from 'react'

export default function Notification() {
    return (
        <>
          <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Notification</h1>
        </div>
    

    <form id="adminNotification" method="post" enctype="multipart/form-data" action="dashboard.php?p=notification&sendnotification=ok">
        <div className="form-group row">
                <label for="email" className="col-sm-2 control-label">Enter Title: </label>
                <div className="col-sm-6">
                <input type="text" className="form-control" name="title" required placeholder="Enter Title"/>
                </div>
            </div>
        <div className="form-group row">
            <label for="email" className="col-sm-2 control-label">Enter Messages: </label>
            <div className="col-sm-6">
                <textarea type="text" className="form-control" name="Message" id="Message"
                    placeholder="Message" rows="10"></textarea>
            </div>
        </div>
        <div className="form-group row">
            <label for="profilepic" className="col-sm-2 control-label">Upload image: </label>
            <div className="col-sm-6 ">
                <input type="file" name="thumb" id="thumb" className="form-control"/>
            </div>
        </div>
        <div className="form-group row">
            <label for="email" className="col-sm-2 control-label">Enter Link: </label>
            <div className="col-sm-6">
                <input type="link" className="form-control" name="Message" id="Message"
                    placeholder="Link..." rows="10"></input>
            </div>
        </div>

        <div className="form-group row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4"> <button type="submit" className=" btn btn-success">Send</button></div>
            <div className="col-sm-4"></div>
        </div>
    </form>

    </div>
        </>
    )
}
