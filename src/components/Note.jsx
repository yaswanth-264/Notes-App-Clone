import React from "react";

function Note(props)
{
    function handleDelete(event){
        props.onDel(props.id);
        event.preventDefault();
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button class="delete" onClick={handleDelete}>DELETE</button>
        </div>
    )
}

export default Note;