import axios from 'axios';

export default axios.create({
  baseURL: `http://127.0.0.1:4010/api/`
});