import axios from 'axios';

const strapi = axios.create({
  baseURL: 'https://mywebsite-strapi-backend.herokuapp.com/posts',
});

export default strapi;
