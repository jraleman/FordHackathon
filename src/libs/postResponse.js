import axios from 'axios';

const baseUrl = 'http://35.193.149.248:3000/api/v1/admin';

export default function postResponse (endPoint, bodyData) {
  console.log('Getting response from: ' + endPoint);
  axios.post(baseUrl + endPoint, bodyData)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
