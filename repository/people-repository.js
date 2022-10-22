const axios = require('axios');
const { formatDate } = require('../util/util');

const url_base = `https://swapi.dev/api/`;

const get = async (id)=>{
    const startTime = new Date();
    const url_api=`${url_base}people/${id}`;
    const res= await axios.get(url_api);
    const endTime = new Date();
    console.log(`people-repository.get(${id}) ${formatDate(startTime)} ${formatDate(endTime)} ${endTime-startTime} ms`);
    return res.data;
};

const gets = async ()=>{
    const arrPeoples =[1,2];
    const result0 = await get(arrPeoples[0]);
    const result1 = await get(arrPeoples[1]);
    const result = `Res0 ${result0.name}\nRes1 ${result1.name}`;
    return result;
};
const getsPromise = async ()=>{
    const arrPeoples =[1,2,3,4,5];
    const results=[];
    arrPeoples.forEach(people=>{
        const result=get(people);
        results.push(result);
    });
    return Promise.all(results)
    .then(values =>{
        let result="";
        values.forEach(value=>{
            result=result+ "\n" + value.name;
        });
        //const result = `Res0 ${result0.name}\nRes1 ${result1.name}`;
        return result;
    
    });
};

module.exports = {get, gets, getsPromise}