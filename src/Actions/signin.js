import axios from "axios"

export const signin = (user, callbackerr, callbacksuccess) =>{
    console.log('request sent');
    axios.post('http://localhost:5000/api/user/login', user)
  .then(function (response) {
    callbacksuccess(response.data);
  }).catch(function(error){
      callbackerr(error.response.data);
  })
}