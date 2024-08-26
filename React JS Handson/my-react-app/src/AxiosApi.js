import React from 'react';
import { useEffect } from 'react';
import axios from "axios";

const AxiosApi = () => {

    //Get request using axios with promises
  useEffect(()=>{
    axios.get("https://api.restful-api.dev/objects?id=1")
    .then((response)=>{
      console.log("Get response using promise = "+JSON.stringify(response.data));
    })
    .catch((err)=>{
      console.error("Error occurred while making an API call "+err.message);
    })    
}
,[]);

  //Get Request using axios with async and await
  useEffect( ()=>{
    const callApi = async () =>{
      try{
        const response = await axios.get("https://api.restful-api.dev/objects?id=1"); 
        console.log("Get response using await= "+JSON.stringify(response.data));
      }
      catch(err)
      {
        console.error("Error occurred while making an API call "+err.message);
      }

    };
    callApi()
  },[]);

  //Post Request using axios with async and await
  useEffect( ()=>{

    const callApi = async () =>{
      const data = {
        "name": "Apple MacBook Pro 16",
        "data": {
           "year": 2019,
           "price": 1849.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"
        }
     };

     try{
      const response = await axios.post("https://api.restful-api.dev/objects?id=1",data);
      console.log("Post response = "+JSON.stringify(response.data));
     }
     catch(err){
      console.error("Error occurred while making an API call "+err.message);

     }

    };
    callApi();
  },[]);

  //Put Request using axios with async and await
  useEffect( ()=>{

      const callApi = async () =>{
        const data = {
          "name": "Apple MacBook Pro 16",
          "data": {
            "year": 2019,
            "price": 2049.99,
            "CPU model": "Intel Core i9",
            "Hard disk size": "1 TB",
            "color": "silver"
          }
      }
      try{
        const response = await axios.put("https://api.restful-api.dev/objects?id=1",data);
        console.log("Put response = "+JSON.stringify(response.data));
      }
      catch(err){
        console.error("Error occurred while making an API call "+err.message);

      }
      callApi();
      }
    },[]);

  //Delete Request using axios with async and await
  useEffect( ()=>{
    const callApi = async () =>{
      try{
        const response = await axios.delete("https://api.restful-api.dev/objects?id=1"); 
        console.log("Delete response using await= "+JSON.stringify(response.data));
      }
      catch(err)
      {
        console.error("Error occurred while making an API call "+err.message);
      }

    };
    callApi()
  },[]);
  return (
    <div>
      
    </div>
  )
}

export default AxiosApi
