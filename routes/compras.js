import express from 'express';
import cielo from '../lib/cielo.js';
var router=express.Router();

router.post('/ecommerce-api/v1/compras',(req,res,next)=>{
  cielo.compra(req.body).then((result)=>{
    
    console.log((result.Payment.PaymentId))
  cielo.captura(result.Payment.PaymentId)
  .then((result)=>{
 
    res.send(result)}
    
    )
  })
  .catch((err)=>{console.log(err)})
})

//GET status de compra

router.get('/:compra_id/status',(req,res,next)=>{
  cielo.consulta(req.params.compra_id)
  .then((result)=>{
    let message={}
    switch(result.Payment.Status){
      case 1:
        message={
          'Status':'Pagamento autorizado'
          
        };
        break;
        case 2:
          message={
            'Status':'Pagamento realizado'
          };
          break;
          case 3:
            message={
              'Status':'Pagamento autorizado'
            };
            break;
    }
  })
})

export default router;
