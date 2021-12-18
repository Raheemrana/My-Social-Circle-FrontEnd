import axios from "axios"

export const allposts = (errorr,success) =>{
    const token = localStorage.getItem('AuthToken');
    axios.get('http://localhost:5000/api/posts', {
        params: {
          token: token
        }
      })
  .then(function (res) {
    console.log('result returned')
    success(res)
  }).catch(function(err){
    errorr(err);
  })
}