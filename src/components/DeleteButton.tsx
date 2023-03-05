import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Button from "@mui/material/Button";
import { INote, useNoteListContext } from "../NoteListContext";

export default function DeleteButton() {

  const {notes, setNotes, activeNoteId} = useNoteListContext()
  console.log(notes);
  

  const clickHandler = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

    const notesUpd = notes.filter((note, i, notes) => {return notes[i].id != activeNoteId })

    localStorage.setItem("noteList", JSON.stringify(notes))
    
    
    setNotes(notesUpd)

  }

  return(
    <Button 
      sx={{
        minWidth: 0, 
        padding: 0
      }}
      onClick={clickHandler}
      >
      <DeleteOutlinedIcon sx={{fill: 'white'}}/>
    </Button>
  )
}