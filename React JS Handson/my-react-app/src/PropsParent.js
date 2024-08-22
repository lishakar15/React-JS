import React from "react";
import{useState} from "react"
import PropsTest from "./PropsTest";

const PropsParent = () =>{

    const personList = [{
        id: 1,
        name :'Jack',
        age:25,
        country:"India"
    },
    {
        id: 2,
        name :'Kumar',
        age:26,
        country:"Japan"
    },
    {
        id: 3,
        name :'Hannah',
        age:21,
        country:"United States"
    }
    ]
    const [persons,setPersons] = useState(personList);

    const handleClick = (id)=>
    {
        const updatedList = persons.filter((item)=>item.id===id?false:true)
        setPersons(updatedList);
    }

    return (

        <PropsTest 
        persons = {persons}
        handleClick={handleClick}
        />
    )
}

export default PropsParent; 