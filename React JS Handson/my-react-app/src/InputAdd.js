import React from 'react';
import "./InputAdd.css"

const InputAdd = ({handleAdd,inputRef}) =>{
    let input= "";
    
    return (
        <form className="form">
            <label htmlFor="addTask" className="addTaskLabel">Add Task</label>
            <input type='text' id ="addTask" className="addTask" onBlur={(e)=>{input= e.target.value}} placeholder='Add your First Task' ref={inputRef}/>
            <button className="addButton" type='submit' onClick={(e)=>{e.preventDefault();inputRef.current.focus(); handleAdd(input);inputRef.current.value=""}}>Add</button>

        </form>
    );
}
export default InputAdd;