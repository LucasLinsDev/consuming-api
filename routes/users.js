import express from 'express';

var router=express.Router();

router.get('/',(req,res,next)=>{
  res.render('index',{title:'experss'})
})

export default router;