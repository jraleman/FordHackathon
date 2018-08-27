import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export default function getResponse (endPoint) {
  console.log('Getting response from: ' + endPoint);
  axios.get(baseUrl + endPoint)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}
