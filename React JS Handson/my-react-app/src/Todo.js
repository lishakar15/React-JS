import React from "react";


const toDoFunction = () =>{
    
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
                    <li>
                        <input type="checkbox" checked={item.isCompleted}></input>
                        <label>{item.taskName}</label>
                        <button>Delete</button>
                    </li>
                    )})
                }

            </ul>
        </div>

    );
}
export default toDoFunction;