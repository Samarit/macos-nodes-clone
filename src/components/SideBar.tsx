
import { List } from "@mui/material";
import { useNoteListContext } from "../NoteListContext"
import Note from "./Note";

export default function SideBar() {

  const context = useNoteListContext()
  const {notes, activeNoteId, setActiveNoteId } = context

  return (
      <div className="sidebar"
      style={{
        gridColumn: ' 1 / 2',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span>Sidebar</span>

        <List>
          {
            notes.length != 0 ?
              notes.map((note) => {
                return <Note note={note} key={note.id}/>
              }) 
              : 'Пока нет никаких заметок'
          }

          
            
        </List>
      </div>
  )
}