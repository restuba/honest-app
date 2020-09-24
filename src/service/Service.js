import Axios from 'axios';

const RootPath = 'http://localhost:3000';

const Get = (path) => {
  const promise = new Promise(( resolve, reject ) => {
    Axios.get(`${RootPath}/${path}`)
    .then((result) => {
      resolve(result.data);  
    }, (err) => {
      reject(err);
    })
  })
  return promise;
}

const getProducts = () => Get('products');
const getProductID = (id) => Get(`products/${id}`);

const API = {
  getProducts,
  getProductID
}

export default API;