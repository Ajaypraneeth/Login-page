import React, {useState} from "react";
import { useNavigate } from "react-router";
import './Login.css'


function Login() {
  let navigate = useNavigate();
  const [userId, setUserid] = useState({
    name:"",
    password:"",
  });
  const [wrong, setWrong] = useState({});

  const handleChange = (e) => {
    setUserid({...userId,[e.target.name]: e.target.value});
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    setWrong(handleErr(userId));

if (userId.name==="Ajaypraneeth" && userId.password==="170801" ){
navigate("/register")
alert("Thank you for Login In")
}
}
    const handleErr = (userId) => {
        let wrong = {};
        if (userId.name !== "Ajaypraneeth") {
          wrong.name = "*Enter your correct user name";
        }
       
        if (userId.password !== "170801") {
          wrong.password = "*Password doesn't match";
        }
        return wrong;
    };
    return(
        <>
        <div className="Page">
            <div className="container text-start py-5 d-flex justify-content-center">
                <div className="row py-5">
                    <div className="col-md-12 mt-1 py-2 text-start">
                        <h1 className="my-4 text-center">Login Page</h1>
                        <form>
                            <label>USER ID :</label>
                            <input 
                            className="my-3"
                            type={"text"}
                            name="name"
                            placeholder="Enter your user ID..."
                            value={userId.name}
                            onChange={handleChange}
                        />
                        <p className="text-danger">{wrong.name}</p>
                        <label>USER PASSWORD :</label>
                        <input
                        className="my-3"
                        type={"password"}
                        name="password"
                        placeholder="Enter user ID password..."
                        value={userId.password}
                        onChange={handleChange}/>
                <p className="text-danger ">{wrong.password}</p>
                <button
                className="px-6 ms-5 mt-3 text-center"
                onClick={handleSubmit}>
                    SUBMIT
                </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            </>
    );
    }
  
export default Login