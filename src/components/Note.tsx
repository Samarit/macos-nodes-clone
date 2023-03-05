import { INote } from "../NoteListContext"

export default function Note(props : INote) {
  return (
    <div className="note">
      <p>{props.title}</p>
      <span>{props.text}</span>
    </div>
  )
}