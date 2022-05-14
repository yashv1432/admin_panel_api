const DummyUserApi =(successCallBack) =>{
  // const [start_date, setStart_date] = useState("");
  
  fetch('https://api.uwolite.com/dummyusers', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/json',
      // "http://localhost:3000": "Access-Control-Allow-Origin",
      //  true: "Access-Control-Allow-Credentials"
    },
     mode: "cors",
    //credentials: "include",
    body: JSON.stringify({ end_date: end_date, start_date: start_date }),
  }).then((result)=>{
     console.warn("result",result)
    result.json().then((resp)=>{
      setUser_count(resp);
      setVideo_count(resp);
    console.warn("resp",resp );
    })
  })
}
  export default DummyUserApi;




  // fetch('/', {
  //   method: 'post',
  //   body: {
  //    "first_name": this.refs.first_name.value
  //   }
  //  })
// const DummyUserApi = [
//   {
//     id: 1,
//     SNo: 1,
//     CreatedBy: "self",
//     Name: "DEVRAT DUBEY",
//     Username: "@DEVRAT 1542633040",
//     Image:
//       "https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16123697751725543594_470104673.jpg",
//     Date: "03-Feb-2021",
//     PageNo: 1,
//   },
//   {
//     id: 2,
//     SNo: 2,
//     CreatedBy: "self",
//     Name: "DEVRAT DUBEY",
//     Username: "@DEVRAT 1542633040",
//     Image:
//       "https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16123697751725543594_470104673.jpg",
//     Date: "03-Feb-2021",
//     PageNo: 2,
//   },
//   {
//     id: 3,
//     SNo: 3,
//     CreatedBy: "self",
//     Name: "DEVRAT DUBEY",
//     Username: "@DEVRAT 1542633040",
//     Image:
//       "https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16123697751725543594_470104673.jpg",
//     Date: "03-Feb-2021",
//     PageNo: 3,
//   },
//   {
//     id: 4,
//     SNo: 4,
//     CreatedBy: "self",
//     Name: "DEVRAT DUBEY",
//     Username: "@DEVRAT 1542633040",
//     Image:
//       "https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16123697751725543594_470104673.jpg",
//     Date: "03-Feb-2021",
//     PageNo: 4,
//   },
//   {
//     id: 5,
//     SNo: 5,
//     CreatedBy: "self",
//     Name: "DEVRAT DUBEY",
//     Username: "@DEVRAT 1542633040",
//     Image:
//       "https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16123697751725543594_470104673.jpg",
//     Date: "03-Feb-2021",
//     PageNo: 5,
//   },
//   {
//     id: 5,
//     SNo: 5,
//     CreatedBy: "self",
//     Name: "DEVRAT DUBEY",
//     Username: "@DEVRAT 1542633040",
//     Image:
//       "https://uwo-entertainment-media.s3.ap-south-1.amazonaws.com/thum/16123697751725543594_470104673.jpg",
//     Date: "03-Feb-2021",
//     PageNo: "Next",
//   },
// ];
// export default DummyUserApi;
