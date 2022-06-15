import fetch from 'node-fetch';
//44ff7540-1584-4d65-9a9e-96fa4ea9217e

//MRGPSBHOXZCQISTCOMYKOZTSRPQRULGVEJNXRKOZ

class Cielo{
  static  compra(params){

   

   return  fetch('https://apisandbox.cieloecommerce.cielo.com.br/1/sales/',{
      method:'post',
      body:JSON.stringify(params),
      headers:{
        'Content-type':'application/json',
        'MerchantId':'44ff7540-1584-4d65-9a9e-96fa4ea9217e',
        'MerchantKey':'MRGPSBHOXZCQISTCOMYKOZTSRPQRULGVEJNXRKOZ',
    
    },
    })
    .then(res=>res.json())
//.then(json=>console.log(json));

  }

  static  captura(paymentId){

   

    return  fetch("https://apisandbox.cieloecommerce.cielo.com.br/1/sales/"+paymentId+"/capture",{
       method:'put',
       headers:{
         'Content-type':'application/json',
         'MerchantId':'44ff7540-1584-4d65-9a9e-96fa4ea9217e',
         'MerchantKey':'MRGPSBHOXZCQISTCOMYKOZTSRPQRULGVEJNXRKOZ',
     },
     })
     .then(res=>res.json())
 //.then(json=>console.log(json));
 
   }
   static  consulta(paymentId){

   

    return  fetch("https://apiquerysandbox.cieloecommerce.cielo.com.br/1/sales/"+paymentId+"",{
       method:'get',
       headers:{
         'Content-type':'application/json',
         'MerchantId':'44ff7540-1584-4d65-9a9e-96fa4ea9217e',
         'MerchantKey':'MRGPSBHOXZCQISTCOMYKOZTSRPQRULGVEJNXRKOZ',
     },
     })
     .then(res=>res.json())
 //.then(json=>console.log(json));
 
   }
}

export default Cielo;