import React from "react"
import profilepic from "../../Images/user-profile.png";
import { deletepost } from "../../Actions/deletepost";
import "react-notifications/lib/notifications.css";
import './createpost.css'
import {
  NotificationContainer,
  NotificationManager ,
} from "react-notifications";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Post = (props) => {

  const [post,setpost]= React.useState(props.blog)
  const [refresher, setrefresher] = React.useState()

  const deleteit=(id)=>{

    deletepost(id,(err)=>{
      console.log(err)
    },(succ)=>{
      console.log('refresh needed')
      console.log(succ)
      NotificationManager.error("Blog deleted");
      props.refresher();

    })

  }
  return (
    <div className="card border-secondary m-4">
      <div className="card-header d-flex flex-xs-row align-items-center justify-content-between">
        <div className="d-flex flex-xs-row align-items-center">
          <NotificationContainer />
        <img
          src={profilepic}
          className="rounded-circle float-left strong"
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
          alt="DP"
        />
        <p className="my-auto float-left">{post.user_id.name}</p>
        </div>
        {props.opfield && (
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          ></button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to={`/post/edit/${post._id}`}>
              Edit
            </Link>
            <div className="dropdown-item" onClick={()=>deleteit(post._id)}>
              Delete
            </div>
          </div>
        </div>
        )}
      </div>
      <div className="card-body text-secondary">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">
          {post.description}
        </p>
      </div>
      <div className="sr-only">
        {refresher}
      </div>
    </div>
  );
};

export default Post;
