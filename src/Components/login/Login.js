import "./Login.css";

import { useHistory } from "react-router-dom";
import { signin } from "../../Actions/signin";
import React from "react";
import img from "../../Images/signin-image.jpg";

function sleep(time){
  return new Promise((resolve)=>setTimeout(resolve,time)
)
}

function Register() {
  let history = useHistory();

  const [inprocessing, setInprocessing] = React.useState(false);
  const [warning, setwarning] = React.useState({
    flag: true,
    errormsg: "",
  });
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!(e.target.email.value && e.target.password.value)) {
      setwarning({
        flag: true,
        errormsg: "Invalid Input",
      });
    } else {
      setInprocessing(true);
      signin(
        user,
        (error) => {
          setInprocessing(false);
          setwarning({
            flag: true,
            errormsg: error,
          });
        },
        (success) => {
          setwarning({
            flag: false,
            errormsg: 'Successfully Logged In',
          });
          localStorage.setItem('AuthToken', success.token);
          localStorage.setItem('User_name', success.name);
          sleep(500).then(()=>{
            history.push("/");
          })
          //history.push("/homepage");
        }
      );
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="order-2 order-md-1 col-12 col-md-6">
          <div className="card my-5">
            <div className="mx-4 my-5">
              {/* title */}
              <div style={{ float: "left" }}>
                <h1 style={{ marginLeft: "5px", marginBottom: "20px" }}>
                  Sign In
                </h1>
              </div>
        
              <div className="login-form">
                <form
                  className="login-form__group"
                  onSubmit={(e) => onSubmit(e)}
                >
                  {/* email */}
                  <div className="input-icons">
                    <i className="fa fa-envelope icon"></i>
                    <input
                      name="email"
                      type="email"
                      value={user.email}
                      onChange={(e) => handleChange(e)}
                      className="input-field"
                      placeholder="Email"
                    />
                  </div>
                  {/* password */}
                  <div className="input-icons">
                    <i className="fa fa-envelope icon"></i>
                    <input
                      name="password"
                      type="password"
                      value={user.password}
                      onChange={(e) => handleChange(e)}
                      className="input-field"
                      placeholder="Password"
                    />
                  </div>
                  {/* warning */}
                  {warning.flag ? (
                    <div style={{ marginLeft: "20px", color: "#dc3545" }}>
                      <small> {warning.errormsg} </small>
                    </div>
                  ) : (
                    <div style={{ marginLeft: "20px", color: "#198754" }}>
                      <small> {warning.errormsg} </small>
                    </div>
                  )}

                  {/* submit button */}
                  <div className="text-center mt-4 mb-3">
                    <input
                      type="submit"
                      className={
                        inprocessing
                          ? "btn btn-primary disabled"
                          : "btn btn-primary"
                      }
                      value="Sign In"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 order-md-2 col-12 col-md-6 text-center my-auto">
          <img
            src={img}
            style={{ margin: "auto" }}
            class="img-fluid"
            alt="signupp"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
