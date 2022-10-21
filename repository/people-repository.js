const axios = require('axios');

const url_base = `https://swapi.dev/api/`;

const get = async (id)=>{
    const url_api=`${url_base}people/${id}`;
    const res= await axios.get(url_api);
    console.log(`res: ${res}`);
    return res;
}

module.exports = {get}