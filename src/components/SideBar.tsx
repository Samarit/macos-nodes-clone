import { useNoteListContext } from "../NoteListContext"
import Note from "./Note";

export default function SideBar() {

  const context = useNoteListContext()
  const {notes, setNotes, notesView } = context

  return (
      <div className="sidebar"
      style={{
        gridColumn: ' 1 / 2',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <span>Sidebar</span>
        <ul>
          {notes.map((note) => {
            return <li key={note.id}><Note {...note} /></li>
          })}
        </ul>
      </div>
  )
}