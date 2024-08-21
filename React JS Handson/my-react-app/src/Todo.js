import React from "react";
import './Todo.css';
import { BsFillTrash3Fill } from "react-icons/bs";
import { useState } from "react";


const ToDoFunction = () =>{

    let toDoList = [
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
    if(localStorage.getItem("toDolist") != null){
        toDoList = JSON.parse(localStorage.getItem("toDolist"));
    }
    const [list,setList] = useState(toDoList);

    //Handle check box click
    const handleCheck = (id)=>{
        if(list.length>0)
        {
            const updatedList = list.map((item) => {
                if(id===item.id)
                {
                    item.isCompleted=!item.isCompleted;
                }
                return item;
            });
            setList(updatedList);
            localStorage.setItem("toDoList",JSON.stringify(list));
        }

    }

    //Handle delete item
    const handleDelete = (id) =>{
        const updatedList = list.filter((item)=>{
            return id !== item.id;
        });
        setList(updatedList);
        localStorage.setItem("toDoList",JSON.stringify(list));
    }

    const styleToStrike = {
        textDecoration:'line-through'
    } 

    return (
        <div className ="todo-container">
            <h4>To-do List</h4>
            <ul className ="item-list">
                {list.map((item)=>{
                    return (
                    <li key={item.id}>
                        <input type="checkbox" className="checkBox" checked={item.isCompleted} onChange={()=>handleCheck(item.id)}></input>
                        <label onDoubleClick={()=>handleCheck(item.id)} className="item-label" style={item.isCompleted===true ? styleToStrike: null}>{item.taskName}</label>
                        <span className="trash" onClick={()=> handleDelete(item.id)}><BsFillTrash3Fill  /></span>
                    </li>
                    )})
                }
            </ul>
        </div>

    );
}
export default ToDoFunction;