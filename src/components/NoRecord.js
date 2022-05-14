import React from 'react'

export default function NoRecord() {
    return (
        <div>
            <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">No record found in videos</h1>
            </div>
        </div>            
          

        {/* <!-- Begin Page Content --> */}
<div className="container-fluid">

{/* <!-- DataTales Example --> */}
<div className="card shadow mb-4">
	<div className="card-header py-3">
        <div className="row form-group mb-0 float-right">  
        {/* <!-- <h1 className="h3 mb-0 text-gray-800">Videos</h1>   --> */}
            {/* <!-- <label for="ToDate" className="control-label">From:</label>                  --> */}
            <div className="col-sm-5">
                {/* <!-- <label for="FromDate" className="control-label">From: </label> --> */}
                <input type="date" id="from-date" value="2022-01-02" className="form-control"/>
            </div>                
            <label htmlFor="ToDate" className="control-label">To:</label>   
            <div className="col-sm-5">                        
                <input type="date" id="to-date" value="2022-01-03" className="form-control"/>
            </div>    
            <div className="col-sm-1">   
            <button type="button" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" onClick="showvideofilter(16,1)">
            <i className="fas fa-download fa-sm text-white-50"></i>
            </button>  
            </div>    
        </div>
	</div>
	<div className="card-body">
		<div className="table-responsive">
			<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
				<thead>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>Video ID</th> --> */}
						<th>Play Preview</th>
						<th>Likes</th>
						<th>Share</th>
						<th>Created At </th>						
						{/* <!-- <th>Action</th> --> */}
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>Sr</th>
						{/* <!-- <th>Video ID</th> --> */}
						<th>Play Preview</th>						
						<th>Likes</th>
						<th>Share</th>
                        <th>Created At </th>
						{/* <!-- <th>Action</th> --> */}
					</tr>
				</tfoot>
				<tbody id="myTable_row">
									</tbody>
			</table>
            <nav aria-label="...">
				<ul className="pagination justify-content-end">
									</ul>
			</nav>
			
		</div>
	</div>
</div>

</div>
        </div>
    )
}
