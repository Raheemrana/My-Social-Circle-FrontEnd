import axios from "axios"

export const deletepost = (blogid, callbackerr, callbacksuccess) =>{


    const token = localStorage.getItem('AuthToken');
    const data = {
      id: blogid,
      token: token
    };
    console.log(data)
    axios.delete("http://localhost:5000/api/posts/deletepost", {
      data: data,
    }, {
      headers: {
        'Content-Type': "application/json"
      }
    })
  .then(function (res) {
    console.log('++ response')
    callbacksuccess(res);
  }).catch(function(err){
    console.log('-- response')
    callbackerr(err);
  })
}