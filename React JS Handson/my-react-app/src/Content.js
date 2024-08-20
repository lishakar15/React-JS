import React from "react";



const ContentFunction = function(){

    function handleGreetingChange() {
        const names = ["Steve","Jack","Hannah"];
        const randomIndex = Math.floor(Math.random()*names.length);
        return names[randomIndex];
    };
    function handleClick(event)
    {
        console.log(`Button clicked ${JSON.stringify(event.type)}` );
    }
    
    return (
        <div className="App">
          <h1> Hi {handleGreetingChange()}</h1>
          <button onClick={(e) =>handleClick(e)}>Click Me</button>
          <p></p>
        </div>
      );
}
export default ContentFunction; //This is a default export and import files can have alias like 'Content' 