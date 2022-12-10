import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
// change the icon to a plus sign
import Fab from "@material-ui/core/Fab";
// add animation to the add button
import Zoom from "@material-ui/core/Zoom";
// create an expand component need to wrap around a fab so it can expand
// https://mui.com/material-ui/api/zoom/

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
        <Zoom in={expanded}>
          {/*Since this components will react based on the boolean true/false need to added */}

          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>

        </Zoom>
      </form>

    </div>
  );
}

export default CreateArea;
