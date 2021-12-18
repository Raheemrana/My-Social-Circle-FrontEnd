import axios from "axios"

export const updatepost = (blog, callbackerr, callbacksuccess) =>{
    console.log('request sent');

    blog.token = localStorage.getItem('AuthToken');
    axios.patch('http://localhost:5000/api/posts/updatepost', blog)
  .then(function (res) {
    callbacksuccess(res);
  }).catch(function(err){
      callbackerr(err);
  })
}