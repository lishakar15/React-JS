import React from 'react';
import './SearchItem.css';
import { FaSearch } from "react-icons/fa";

const SearchItem = ({searchItem,setSearchItem}) =>{
    
    return (
        <form className="form">
            <label htmlFor="searchTask" className="searchTaskLabel">Search Task</label>
            <input type='text' id ="searchTask" className="searchTask" value={searchItem} onChange={(e)=>{setSearchItem(e.target.value)}} placeholder='Search Task' />
            {/* <button className="searchButton" type='submit' onClick={(e)=>handleSearch(e,input)}><FaSearch /></button> */}
            <button className="clearButton" type='clear' onClick={(e)=>{e.preventDefault();setSearchItem('')}}>Clear Filter</button>
        </form>
    );
}

export default SearchItem;