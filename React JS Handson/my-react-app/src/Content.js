import React from "react";



const ContentFunction = function(){

    function handleGreetingChange() {
        const names = ["Steve","Jack","Hannah"];
        const randomIndex = Math.floor(Math.random()*names.length);
        return names[randomIndex];
    };

    return (
        <div className="App">
          <h1> Hi {handleGreetingChange()}</h1>
        </div>
      );
}
export default ContentFunction; //This is a default export and import files can have alias like 'Content' 