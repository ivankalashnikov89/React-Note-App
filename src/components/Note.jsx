import React from "react";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';

export default function Note(props) {

function handleClick() {

    //callback from Note component to trigger the delete function
    props.onDelete(props.id);
}

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>
                < RestoreFromTrashIcon/>
            </button>
        </div>
    )
}