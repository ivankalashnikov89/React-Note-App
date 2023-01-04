import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateField from "./components/CreateField";

export default function App() {

    const[notes, setNotes] = useState([]);
    //adding new note to an array
    function addNote(newNote) {
        setNotes((prevValue) => {
            return [...prevValue, newNote];
        });

    }

    //function to filter out the item that needs deletion
    function deleteNote(id) {
        setNotes((prevValue) => {
            return prevValue.filter((noteItem,index) => {
                return index !==id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateField noteAdd={addNote} />

            {/*the map function to loop through the notes array*/}
            {notes.map((noteItem, index) => {
            return (
             <Note key={index}
                    id={index}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                    />);
                })}
            <Footer />
        </div>
    )
}