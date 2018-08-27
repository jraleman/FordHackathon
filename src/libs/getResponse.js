import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com'

export default function getResponse (endPoint) {
  console.log('Getting response from: ' + endPoint);
  axios.get(baseUrl + endPoint)
  .then(res => {
    const persons = res.data;
    console.log(persons);
  })
  .catch(err => {
    console.log('Error: ' + err);
  });
}
