
const URI ="http://localhost:3500/items";
const UPDATE_URI="http://localhost:3500/"

export const getList = async ()=> {

    try
    {
        const response = await fetch(URI);
        const list = await response.json();
        return list;
    
    }
    catch(err)
    {
        
      console.error("Error occurred while fecthing data from API "+err.message)  
    }

}

export const saveList = async (list)=>{

    const requestObj ={
        method:"POST",
        header:{
            'Content-Type' :'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(list)
    } 

    try{
            const responseObj = await fetch(URI,requestObj)
            console.log("Saving data = "+JSON.stringify(responseObj));
            return responseObj.ok?true:false;
    }
    catch(err)
    {
        console.error("Error occurred while saving data to API "+err.message);
    }

}

export const updateList = async (item)=>{
    const requestObj ={
        method:"PATCH",
        header:{
            'Content-Type' :'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(item)
    } 
    try
    {
        const responseObj = await fetch(`${URI}/${item.id}`,requestObj);
        console.log("Updating data");
        return responseObj.ok?true:false;
    }
    catch(err)
    {
        console.error("Error occurred while saving data to API "+err.message);
    }

}

export const deleteList = async (id)=>{

    const requestObj = {
        method:"DELETE",
    }
    try
    {
        const responseObj = await fetch(`${URI}/${id}`,requestObj);
        return responseObj.ok?true:false;
    }
    catch(err)
    {
        console.error("Error occurred while deleting data from API "+err.message);
    }
}
