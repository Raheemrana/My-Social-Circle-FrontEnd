import profilepic from "../../Images/user-profile.png";
import { useHistory } from "react-router-dom";

import React from "react"
import "./createpost.css";
import { postblog } from "../../Actions/postblog";
function Createpost(props){
  var history = useHistory();
  const [blog, setBlog] = React.useState({
    title: "",
    description: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!(e.target.description.value))
    {
    }
    else{
        postblog(blog,(err)=>{
            console.log(err)
        },(succ) =>{
          setBlog({
            title: "",
            description: ""
          });
            console.log('blog posted successfully')
            props.changer()
        }
        )}
  };


  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card border-secondary m-4">
      <div className="card-body text-secondary">
        <div>
          <p className="card-text">
            <b>Post a new blog</b>
          </p>
          <form className="login-form__group" onSubmit={(e) => onSubmit(e)}>
            <input
              name="title"
              type="text"
              value={blog.title}
              onChange={(e) => handleChange(e)}
              className="input-field-create"
              placeholder="Title"
              style={{fontWeight : "bold"}}
            />
            <textarea
              name="description"
              className="border-0 my-1 input-field-create"
              value={blog.description}
              rows="2"
              onChange={(e) => handleChange(e)}
              placeholder="Desciption"
              style={{ width: "100%"}}
            ></textarea>
            <div className="text-center mb-1 d-flex justify-content-end">
              <input
                type="submit"
                className="btn btn-secondary px-3 mx-5"
                value="Post"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
