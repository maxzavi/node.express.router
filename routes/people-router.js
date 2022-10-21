const { Router } = require('express'); 
const { get } = require('../repository/people-repository');
const router = Router();

router.get("/:id", async (req,res)=>{
    try {
        const result = await get(req.params.id);
        console.log(`Result: ${result.data}`); 
        res.send(result.data);            
    } catch (error) {
        console.warn('Warn:',error);
        res.status(error.response.status).send(error.response.data);   
    }
});
module.exports = router;