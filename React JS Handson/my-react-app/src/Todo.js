import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";


const toDoFunction = () =>{

    const listStyle = {
        
    }
    
    const toDoList = [
        {
            id :1,
            isCompleted : true,
            taskName:"Learn React",
        },
        {
            id:2,
            isCompleted : false,
            taskName:"Play Games",
        },
        {
            id:3,
            isCompleted : true,
            taskName:"Go to GYM",
        }
    ];
    console.log("Inside Todo "+toDoList);
    return (
        <div className ="App">
            <ul>
                {toDoList.map((item)=>{
                    return (
                    <li key={item.id}>
                        <input type="checkbox" checked={item.isCompleted}></input>
                        <label>{item.taskName}</label>
                        <span><BsFillTrash3Fill  /></span>
                    </li>
                    )})
                }

            </ul>
        </div>

    );
}
export default toDoFunction;