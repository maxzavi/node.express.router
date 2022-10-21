
const { Router } = require('express'); 
const { getDemo } = require('../repository/demo-repository');

const routerDemo = Router();

routerDemo.get("/", (req,res)=>{
    const result = getDemo();
    res.send(result);
}
);

module.exports = routerDemo