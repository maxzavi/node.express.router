const { Router } = require('express'); 
const { get, gets, getsPromise } = require('../repository/people-repository');
const router = Router();

router.get("/:id", async (req,res)=>{
    try {
        const result = await get(req.params.id);
        res.send(result);            
    } catch (error) {
        console.warn('Warn:',error);
        res.status(error.response.status).send(error.response.data);   
    }
});
router.get("/promise/0", async (req,res)=>{
    try {
        const result = await getsPromise();
        res.send(result);            
    } catch (error) {
        console.warn('Warn:',error);
        res.status(error.response.status).send(error.response.data);   
    }
});

router.get("/", async (req,res)=>{
    try {
        const result = await gets();
        res.send(result);            
    } catch (error) {
        console.warn('Warn:',error);
        res.status(error.response.status).send(error.response.data);   
    }
});



module.exports = router;