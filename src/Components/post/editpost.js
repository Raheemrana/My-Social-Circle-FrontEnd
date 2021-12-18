import profilepic from "../../Images/user-profile.png";
import { useHistory } from "react-router-dom";
import Navbar from "../homepage/navbar";
import {
    NotificationContainer,
    NotificationManager,
  } from "react-notifications";
import React from "react";
import "./editpost.css";
import { postblog } from "../../Actions/postblog";

import { getspecificpost } from "../../Actions/getspecificpost";
import { updatepost } from "../../Actions/updatepost";

function Editpost(props) {
  const {
    params: { postId },
  } = props.match;

  const [isLoading, setisLoading] = React.useState(false);
  const [blog, setBlog] = React.useState({
    title: "",
    description: "",
  });

  React.useEffect(() => {
    getspecificpost(
      postId,
      (err) => {
        console.log(err);
      },
      (succ) => {
        console.log(succ.data);
        setBlog(succ.data);
        setisLoading(true);
      }
    );
  }, []);

  const handleChange = (e) => {
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.description.value) {
    } else {
      updatepost(
        blog,
        (err) => {
          console.log(err);
        },
        (succ) => {
          console.log("blog updated successfully");
          NotificationManager.success("Blog updated");
        }
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#6a8296",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
      }}
    >
      {isLoading && (
        <div>
          <Navbar />
          <NotificationContainer />
          <div className="card border-secondary m-4">
            <div className="card-body text-secondary">
              <div>
                <p className="card-text">
                  <b>Modify this post</b>
                </p>
                <form
                  className="login-form__group"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <input
                    name="title"
                    type="text"
                    value={blog.title}
                    onChange={(e) => handleChange(e)}
                    className="input-field-create"
                    placeholder="Blog Title"
                    style={{ fontWeight: "bold" }}
                  />
                  <textarea
                    name="description"
                    className="border-0 my-1 input-field-create"
                    value={blog.description}
                    rows="2"
                    onChange={(e) => handleChange(e)}
                    placeholder="Blog body"
                    style={{ width: "100%" }}
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
        </div>
      )}
    </div>
  );
}

export default Editpost;
