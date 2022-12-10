import React from "react";
// import Timer from "./Timer";
import Calendar from "./Calendar";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
  

  <div className="note">
      <Calendar />

      <div className="note-content">
      <h1>{props.title}</h1>
      <p>{props.content}</p>

      </div>




      <div className="note-button">     
      {/* eslint-disable-next-line */}
      <button className="complete-button" role="button" onClick={handleClick}>
      <span class="material-symbols-outlined"> check </span>        
<span> Completed! </span>
      </button>
      </div>
  


      

  </div>






  
  );
}

export default Note;
