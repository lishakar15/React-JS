import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const Content = ({activeTab}) =>{
    const [list,setList] = useState([]);
    const URI = "https://jsonplaceholder.typicode.com";

    const fetchData = async () =>{
        try
        {
            const responseObj = await fetch(`${URI}/${activeTab}`);
            console.log("api call to "+activeTab);
            if(responseObj.ok)
            {
                const response = await responseObj.json();
                setList(response);
            }
        }
        catch(err)
        {
            console.error("Error occurred "+err.message)
        }
        finally
        {
            //
        }
    }
    useEffect(()=>{
        fetchData()
    },[activeTab]);//Listen to activeTab state changes 

    //fetchData();

    return(
        <div>
            <ul>
                {list.map((item)=>(<li key={item.id}>${JSON.stringify(item)}</li>))}
            </ul>
        </div>

    )
}

export default Content;