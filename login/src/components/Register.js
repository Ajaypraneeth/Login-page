import React, {useState} from "react";
import "./Register.css";

function Register() {

    const[userDetails,setUserDetails]= useState({
        Fname:"",Lname:"",Gender:"",date:"",age:"",degree:"",location:"",description:"",
    });    
    const[data, setData] = useState([]);
    const[errors,setErrors]=useState({});
    const[visible,setVisible]=useState(false);

    const onChange =(e) => {
        setUserDetails({...userDetails,[e.target.name]: e.target.value});
    };

    const Validation = (userDetails) => {
    let errors ={};

    if (userDetails.Fname === "") {
        errors.Fname = "*Please Enter your Fname";
        setVisible(false);
      } else {
        setVisible(true);
      }
    if (userDetails.Lname === "") {
        errors.Lname = "*Please Enter your Lname";
        setVisible(false);
      } else {
        setVisible(true);
      }
    if (userDetails.Gender === "") {
        errors.Gender = "Gender is Required";
        setVisible(false);
      } else {
        setVisible(true);
      }
    if (userDetails.date === "") {
        errors.date = "*Birth date cannot be empty";
        setVisible(false);
      } else {
        setVisible(true);
      }
    if (userDetails.age === "") {
        errors.age = "*Age is Required";
        setVisible(false);
      } else {
        setVisible(true);
      }
    if (userDetails.degree === "") {
        errors.degree = "*Please choose your Degree";
        setVisible(false);
      } else {
        setVisible(true);
      }
    if (userDetails.location === "") {
        errors.location = "*Please Pick Your Location";
        setVisible(false);
      } else {
        setVisible(true);
      }
    if (userDetails.description === "") {
        errors.description = "*Your Description is Needed";
        setVisible(false);
      } else {
        setVisible(true);
      }
      console.log(errors);
      
    return(errors);
   };
   
   const handleSubmit = (e) =>{
    e.preventDefault();
    setErrors(Validation(userDetails));

    setData((logs) =>[...logs,userDetails]);
    console.log("datas",data);
   };

   const clear = (e) =>{
    e.preventDefault();
    setUserDetails({
        Fname:"",Lname:"",Gender:"",date:"",age:"",degree:"",location:"",description:"",
    });
   };
   return(
    <>
    <div className="wrapper">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-6 col-md-12  text-centre ">
              <h1 className="head text-black my-4">Register now</h1>
              <form className="form ps-3 mb-4">
                <label className="pt-3">First Name:</label>
                <input
                  className="mx-2 mt-2 w-50 text-center"
                  type={"text"}
                  name="Fname"
                  value={userDetails.Fname}
                  onChange={onChange}
                  placeholder="Fname"
                />
                <p className="text-danger">{errors.Fname}</p>
                <label>Last Name:</label>
                <input
                  className="mx-2 mt-2 w-50 text-center"
                  type={"text"}
                  name="Lname"
                  value={userDetails.Lname}
                  onChange={onChange}
                  placeholder="Lname"
                />
                <p className="text-danger">{errors.Lname}</p>
                <label>Gender :</label>
                <input
                  className="mx-4 text-center"
                  type={"radio"}
                  name="Gender"
                  value={"Male"}
                  onChange={onChange}
                />
                <label for="Male">Male</label>
                <input
                  className="mx-3"
                  type={"radio"}
                  name="Gender"
                  value={"Female"}
                  onChange={onChange}
                />{""}
                <label for="Female">Female</label>
                <p className="text-danger">{errors.Gender}</p>
                
                <label>DOB :</label>
                <input
                  className=" mx-3 mt-2 text-center"
                  type={"date"}
                  name="date"
                  value={userDetails.date}
                  onChange={onChange}
                />
                <p className="text-danger">{errors.date}</p>
                <label>Age :</label>
                <input
                  className=" mx-3 mt-2 px-10 text-center"
                  type={"number"}
                  name="age"
                  value={userDetails.age}
                  onChange={onChange}
                  placeholder="Enter your Age"
                />
                <p className="text-danger">{errors.age}</p>
                <label>Degree :</label><br/>
                <label>B.E</label>
                <input className="mx-3"
                 type="checkbox"
                 name="degree"
                 value={"B.E"}
                 onChange={onChange}
                />
                <label>B.Tech</label>
                <input className="mx-3"
                 type="checkbox"
                 name="degree"
                 value={"B.Tech"}
                 onChange={onChange}
                 />
                 <label>B.sc</label>
                <input className="mx-3"
                 type="checkbox"
                 name="degree"
                 value={"B.sc"}
                 onChange={onChange}/>
                 <label>M.sc</label>
                <input className="mx-3"
                 type="checkbox"
                 name="degree"
                 value={"M.sc"}
                 onChange={onChange}/>
            
                <p className="text-danger">{errors.degree}</p>

                <label>Location : </label>
                <select
                  className="mx-2 mt-1 w-50 text-center"
                  value={userDetails.location}
                  onChange={onChange}
                  name="location"
                >
                  <option></option>
                  <option>Vellore</option>
                  <option>Bangalore</option>
                  <option>Chennai</option>
                  <option>Katpadi</option>
                </select>
                <p className="text-danger">{errors.location}</p>

                <label>Description :</label>
                <input
                  className="mx-3 mt-2 "
                  type={"textarea"}
                  value={userDetails.description}
                  name="description"
                  onChange={onChange}
                  placeholder="Notes..."
                />
                <p className="text-danger">{errors.description}</p>
                <button className="submit" onClick={handleSubmit}>
                  Submit
                </button>
                <button className="reset" onClick={clear}>
                Reset
                </button>
              </form>
            </div>
            {visible ? (
              <div className="col-md-6 py-5 text-center">
                <h2> Fetched Details</h2>
                {data.map((render) => (
                  <div>
                    <h5>Name :{render.Fname}{render.Lname}</h5>
                    <h5>Gender :{render.Gender}</h5>
                    <h5>DOB :{render.date}</h5>
                    <h5>Age :{render.age}</h5>
                    <h5>Degree :{render.degree}</h5>
                    <h5>Location :{render.location}</h5>
                    <h5>Description :{render.description}</h5>
                    
                  </div>
                ))}
              </div>
            ) : (
              ""    
            )}
          </div>
        </div>
      </div>
    </>
   )
}
export default Register;