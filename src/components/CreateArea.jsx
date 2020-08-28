import React, { useState }from 'react';

function CreateArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    
    function handleChange(e){
        const {name, value}= e.target;
        setNote((prevNote)=> {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function handleSubmit(e){
        props.onAdd(note);
        e.preventDefault();
    }


    return (
        <div>
            <form>
                <input value={note.title}
                 name="title" 
                 onChange={handleChange}      
                 placeholder ="Title" />

                <textarea value={note.content} 
                name="content" 
                onChange={handleChange}
                placeholder="Take a note..." />
                <button onClick={handleSubmit}>+</button>
            </form>
        </div>
    );
}

export default CreateArea;