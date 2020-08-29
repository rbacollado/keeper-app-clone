import React, { useState }from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props){
    const [isExpanded, setExpanded] = useState(false);
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
        setNote({
            title: "",
            content: ""
        });
        setExpanded(false);
        e.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded ? <input value={note.title}
                name="title" 
                onChange={handleChange}      
                placeholder ="Title"/> : null}

                <textarea value={note.content} 
                name="content" 
                onClick={() => setExpanded(true)}
                onChange={handleChange}
                rows={isExpanded ? 3 : 1} 
                placeholder="Take a note..." />

                <Zoom in={isExpanded ? true : false}>
                    <Fab onClick={handleSubmit}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;