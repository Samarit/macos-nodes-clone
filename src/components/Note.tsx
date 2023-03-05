import { INote, useNoteListContext } from "../NoteListContext"
import ListItem from '@mui/material/ListItem'
import { ListItemText } from "@mui/material"

type Props = {
  note: INote
}

export default function Note( props: Props  ) {

  const {id, title, text, editDate} = props.note
  
  const {activeNoteId, setActiveNoteId} = useNoteListContext()

  const clickHandler = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setActiveNoteId(id)
  }

  return (
    <ListItem className={`note ${activeNoteId === id ? 'active' : ''}`} onClick={clickHandler} key={id}>
      <ListItemText primary={title} secondary={text}>
        
      </ListItemText>
    </ListItem>
  )
}