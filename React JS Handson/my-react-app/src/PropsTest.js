import React from 'react';
import './PropsTest.css';

 
const PropsTest = ({persons,handleClick}) =>{

    return (
        <ul>

            {persons.map((item)=> 
            <li key={item.id}className ="list" onClick={()=>handleClick(item.id)} style={{cursor:'pointer'}}>
                <a>{item.name} is {item.age} years old and lives in {item.country}</a>
                </li>    
            )
            }
        </ul>
    )
}

export default PropsTest;