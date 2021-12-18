import axios from "axios"



export const postblog = (blog, callbackerr, callbacksuccess) =>{

    blog.token = localStorage.getItem('AuthToken');
    axios.post('http://localhost:5000/api/createpost', blog)
  .then(function (res) {
    callbacksuccess(res);
  }).catch(function(err){
      callbackerr(err);
  })
}