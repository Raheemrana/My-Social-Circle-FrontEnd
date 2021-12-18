import axios from "axios"

export const getmyposts = (errorr,success) =>{
    const token = localStorage.getItem('AuthToken');
    axios.get('http://localhost:5000/api/posts/myposts', {
        params: {
          token: token
        }
      })
  .then(function (res) {
    console.log(res)
    success(res)
  }).catch(function(err){
    errorr(err);
  })
}