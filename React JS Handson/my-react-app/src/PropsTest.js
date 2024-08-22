import React from 'react';
import './PropsTest.css';

 
const PropsTest = (passedObject) =>{
    
    const persons = passedObject.persons;
    const handleClick = passedObject.handleClick;
    return (
        <div>

            {persons.map((item)=> 
            <p className ="App" onClick={()=>handleClick(item.id)} style={{cursor:'pointer'}}>
                {item.name} is {item.age} years old and lives in {item.country}
                </p>    
            )
            }
        </div>
    )
}

export default PropsTest;