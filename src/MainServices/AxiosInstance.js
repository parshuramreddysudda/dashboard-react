import axios from 'axios';

export default axios.create({
  baseURL: `http://0.0.0.0:4010/api/`
});