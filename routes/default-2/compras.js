import express from 'express';
import pagarme from '../../lib/pagarme.js';
var router=express.Router();

router.post('/ecommerce-api/v1/compras',(req,res,next)=>{

  pagarme.compra(req.body);
  res.send('ok');

})

//GET status de compra

router.get('/:compra_id/status',(req,res,next)=>{


})

export default router;
