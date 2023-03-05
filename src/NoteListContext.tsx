import React, { createContext, useState, useContext } from "react"

// Note interface
export interface INote {
  id: number,
  title: string,
  text: string,
  editDate: number,
}

type NoteListView = "list" | "tile" // View toggle type
type ActiveNoteId = number | null

// NoteList context interface
interface INoteListContext {
  notes: INote[] | [],
  setNotes: React.Dispatch<React.SetStateAction<INote[] | []>>,
  notesView: NoteListView,
  setNotesView: React.Dispatch<React.SetStateAction<NoteListView>>,
  activeNoteId: ActiveNoteId,
  setActiveNoteId: React.Dispatch<React.SetStateAction<ActiveNoteId>>
}

// Create context
const NoteListContext = createContext<INoteListContext | null>(null)

// Context hook
const useNoteListContext = () => {
  const context = useContext(NoteListContext)

  if (!context) throw new Error('NoteListContext is undefined')
  
  return context
}

// Get localStorage NodeList
const noteList: INote[] | [] = JSON.parse(localStorage.getItem("noteList") || "[]")

// NoteList context provider component
const NoteListContextProvider : React.FC<React.PropsWithChildren> = ( {children} ) => {

  // notes list data state
  const [notes, setNotes] = useState( noteList )
  // notes list view state
  const [notesView, setNotesView] = useState<NoteListView>("list")
  // Active note state
  const [activeNoteId, setActiveNoteId] = useState<ActiveNoteId>(null)


  return (
    <NoteListContext.Provider value={{notes, setNotes, notesView, setNotesView, activeNoteId, setActiveNoteId}}>
      {children}
    </NoteListContext.Provider>
  )
}

export { NoteListContext, useNoteListContext, NoteListContextProvider}