import axios from 'axios';
//44ff7540-1584-4d65-9a9e-96fa4ea9217e

//MRGPSBHOXZCQISTCOMYKOZTSRPQRULGVEJNXRKOZ

class Pagarme{
  static async compra(params){
   await axios.post('https://api.pagar.me/1/transactions',
    params,
    {
      headers:{
        'content-type':'application/json'
      }
    })
    .then(function(response){
      console.log(response);
    })
    .then(function(err){
      console.log(err);
    })
  
  }

  static  captura(paymentId,amout){

  return axios.post(
    'https://api.pagar.me/1/transactions/'+ paymentId +'/capture',
    {
      amout:amout,
      api_key:'ak_test-ifjsdlajfkdsjfkdl',
    },
    {
      headers:{
        'content-type':'application/json',
      }
    }
  )
  
   
   }
   static  consulta(paymentId){

    return axios.get(
      'https://api.pagar.me/1/transactions/'+paymentId,
      {
        params:{
          api_key:'ak_test_ljklfdasjfjyewqjfoijrffj'
        },
        header:{
          'content-type':'application/json',
        }
      }
    )
 
   }
}

export default Cielo;