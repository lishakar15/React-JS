import React from "react";
import './Todo.css';
import { BsFillTrash3Fill } from "react-icons/bs";
import { useState } from "react";
import InputAdd from "./InputAdd";
import SearchItem from "./SearchItem";


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

    if(JSON.parse(localStorage.getItem("toDoList")).length>0){
        toDoList = JSON.parse(localStorage.getItem("toDoList"));
    }
    
    let [list,setList] = useState(toDoList);
    const[searchItem,setSearchItem] = useState("");


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
        localStorage.setItem("toDoList",JSON.stringify(updatedList));
    }

    const handleAdd = (taskName)=>{
        if(taskName)
        {
            const listLength = list.length;
            const newList = [...list,
                {
                    id :listLength > 0 ? listLength+1 : 1,
                    isCompleted : false,
                    taskName: taskName,
                }
            ]
            setList(newList);
            localStorage.setItem("toDoList",JSON.stringify(newList));
        }
    }

    const styleToStrike = {
        textDecoration:'line-through'
    } 

    return (
        <div className ="todo-container">
            <h4>To-do List</h4>
            <InputAdd handleAdd={handleAdd}/>
            <SearchItem searchItem ={searchItem} setSearchItem={setSearchItem}/>
            {list.length > 0 ? (
                <ul className ="item-list">
                {list.filter((item) => item.taskName.toLowerCase().includes(searchItem.toLowerCase()))
                    .map((item)=>{
                        return (
                        <li key={item.id} className="todoLi">
                            <input type="checkbox" className="checkBox" checked={item.isCompleted} onChange={()=>handleCheck(item.id)}></input>
                            <label onDoubleClick={()=>handleCheck(item.id)} className="item-label" style={item.isCompleted===true ? styleToStrike: null}>{item.taskName}</label>
                            <span className="trash" onClick={()=> handleDelete(item.id)}><BsFillTrash3Fill  /></span>
                        </li>
                        )})
                }
            </ul>
            ):(
                <p>Your List is empty</p>
            )
        }
        </div>

    );
}
export default ToDoFunction;