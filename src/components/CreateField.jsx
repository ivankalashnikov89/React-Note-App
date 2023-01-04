import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

export default function CreateField(props) {

    //the const that keeps track of the title and content
    const[note,setNote] = useState({
        title:"",
        content:""
    })

    //function that is going to receive an event when it get triggered
    function handleChange(event) {
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
            ...prevNote,
            [name]:value
            };
        });
    }

    /*the note gets added over to our App.js 
    and we set the note state to both an empty title 
    and an empty content */
    function submitNote(event) {
        props.noteAdd(note);
        setNote({
            title:"",
            content:""
        });

        //preventing entire reloading the page
        event.preventDefault();
    }

    const[isOpen, setIsOpen] = useState(false);

    function titleOpener() {
        setIsOpen(true);
    }

    return (
        <div>
            <form>
                {isOpen && <input 
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                    />}
                <textarea 
                    onClick={titleOpener}
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows={isOpen ? 3 : 1}
                />
                <Zoom in={isOpen}>
                    <button onClick={submitNote}><AddIcon /></button>
                </Zoom>
            </form>
        </div>
    )

}