import express from "express";

const router = express();

router.get('/', (req, res, next)=>{
    res.send('<h1>Hellow from express!!</h1>')
  });
  
module.exports = router;

