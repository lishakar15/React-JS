import React from 'react';
import "./InputAdd.css"

const InputAdd = ({handleAdd}) =>{
    let input= "";
    
    return (
        <form className="form">
            <label htmlFor="addTask" className="addTaskLabel">Add Task</label>
            <input type='text' id ="addTask" className="addTask" onBlur={(e)=>{input= e.target.value}} placeholder='Add your First Task' />
            <button className="addButton" type='submit' onClick={()=>handleAdd(input)}>Add</button>

        </form>
    );
}
export default InputAdd;