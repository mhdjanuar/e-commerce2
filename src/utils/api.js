import axios from 'axios';

const BASE_URL = `https://jsonplaceholder.typicode.com`

const request = async (path, options = {}) => {
    try {
    //   const token = 'token_1_asdasd';

      let method = 'get';
      if (options.method) {
        method = options.method.toUpperCase();
      }

      let body = null;
      let response;

      if (options.body) {
        body = options.body;
      }

    //   if (token) {
    //     if (options.body) {
    //       body.token = token;
    //     } else {
    //       body = {
    //         token: token,
    //       };
    //     }
    //   }

      switch (method) {
        case 'POST':
            response = await axios.post(`${BASE_URL}/${path}`, body);
            return response;
        case 'GET':
            response = await axios.get(`${BASE_URL}/${path}`, body);
            return response;
        case 'PUT':
            response = await axios.put(`${BASE_URL}/${path}`, body);
            return response;   
        case 'DELETE':
            response = await axios.delete(`${BASE_URL}/${path}`, body);
            return response;          
        default:
            response = null;
      }
    } catch (err) {
      if (err instanceof TypeError) {
        const networkError = `${err}`.toLowerCase();
        if (networkError.indexOf('networkerror') !== -1) {
          throw new Error('Check Internet Connectivity');
        }
      }
      throw JSON.parse(err);
    }
};

export default request;