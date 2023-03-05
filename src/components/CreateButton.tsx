import Button from "@mui/material/Button";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { INote, useNoteListContext } from "../NoteListContext";


export default function CreateButton() {

  const {notes, setNotes} = useNoteListContext()
  
  const defaultNoteContent: INote = {
    id: notes.length + 1 ,
    title: 'Новая замтека',
    text: 'Нет дополнительного текста',
    editDate: Date.now()
  }

  const clickHandler = () => {
    const updatedNotes = [...notes, defaultNoteContent] // New notes array
    localStorage.setItem("noteList", JSON.stringify(updatedNotes))
    setNotes(updatedNotes)
  }

  return(
    <Button onClick={clickHandler}>
      <CreateOutlinedIcon sx={{fill: 'white'}} />
    </Button>
  )
}