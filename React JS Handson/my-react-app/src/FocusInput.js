import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null); // Initialize a ref to null

  const handleFocus = () => {
    inputRef.current.focus(); // Access the DOM element and focus it
    inputRef.current.value='';
  };

  return (
    <div style={{textAlign:"center", margin:"20px"}}>
      <input ref={inputRef} type="text" placeholder="Focus me with button" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusInput;