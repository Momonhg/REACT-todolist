import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  const [expanded, setExpanded] = useState(false);

  function handleExpand() {
    setExpanded(true);
    console.log(expanded);
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
    setExpanded(false);

  }



  return (
    <div>

      <form className="create-note">
        {expanded === true ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Name of the task"
          />
        ) : null}

        <textarea
          name="content"
          onClick={handleExpand}
          onChange={handleChange}
          value={note.content}
          placeholder={
            expanded === true
              ? "Something special about this task?"
              : "What you need to do today?"
          }
          rows={expanded === true ? "3" : "1"}
        />
        <button style={{visibility: expanded === true ? "visible" :"hidden"}} onClick={submitNote} class="material-symbols-outlined"> add

        </button>
      </form>

    </div>
  );
}

export default CreateArea;
