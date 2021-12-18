import React from "react";
import "./myposts.css";
import { getmyposts } from "../../Actions/getmyposts";
import { useHistory } from "react-router-dom";
import Navbar from "../homepage/navbar";
import Createpost from "../post/createpost";

import Post from "../post/post";

const Myposts = () => {
  var history = useHistory();
  //it will check from the server if the token is authenticated
  const [authenticated, setauthenticated] = React.useState(false);
  const [myposts, setmyposts] = React.useState([]);
  React.useEffect(() => {
    getmyposts(
      (error) => {
        setauthenticated(false);
      },
      (success) => {
        console.log(success.data)
        setmyposts(success.data.reverse());
        setauthenticated(true);
      }
    );
  },[]);

  const refreshfunc = () =>{
    console.log('refresher called')
    window.location.reload();
  }

  return (
    <div style={{backgroundColor: "#6a8296", position: "absolute", top: "0", left: "0", right: "0", bottom: "0"}}>
      {authenticated ? (
        <div>
            <Navbar/>
          <div className="container-fluid hpage">
            <div className="row">
              <div className="col-8 d-flex flex-column mx-auto">
                {myposts.map((blog) => (
                  <Post key={blog.title} blog={blog} refresher = {refreshfunc} opfield={true} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ): (
        //:history.push("/login")
        <div style={{backgroundColor: "#435564", position: "absolute", top: "0", left: "0", right: "0", bottom: "0" , color: "#FFF"}}>
            <h3 className="ms-5 mt-5 sr-only">Loading...</h3>
        </div>
      )}
    </div>
  );
};
export default Myposts;
