import "./App.css";
import Homepage from "./Components/homepage/Homepage";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import Myposts from "./Components/posts/myposts";
import Editpost from "./Components/post/editpost";

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
function App() {

  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/myposts' component={Myposts} />
          {/* <Route path='/myposts/edit/:postid' component={Homepage} /> */}
          <Route path="/post/edit/:postId" component={Editpost} />
      </Switch>
  </Router>
  );
}

export default App;
