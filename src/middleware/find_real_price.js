import axios from 'axios'

async function getCommodityPrice(name) {
  try {
    const url = `https://api.api-ninjas.com/v1/commodityprice?name=${name}`;
    const headers = {
      'X-Api-Key': 'nXPzQGf54MfuuSuKJNutkA==sRhYmSbvE09loazV'
    }; 


    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {

    let data = {
        "exchange": "api_error",
        "name": name,
        "price": (Math.random() * (99999 - 10000) + 1000)/1000,
        "updated": 1728677095
      }
      
    console.log(error)

  }
}
