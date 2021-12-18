import axios from "axios"

export const getspecificpost = (id,errorr,success) =>{
    const token = localStorage.getItem('AuthToken');
    console.log('sending req')
    axios.get('http://localhost:5000/api/posts/specpost', {
        params: {
          token: token,
          postId: id
        }
      })
  .then(function (res) {
    console.log('result returned')
    success(res)
  }).catch(function(err){
    errorr(err);
  })
}