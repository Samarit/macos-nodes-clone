import './App.css'
import TopBar from './components/TopBar'
import SideBar from './components/SideBar'
import Main from './components/Main'
import { NoteListContextProvider } from './NoteListContext'
import Box from '@mui/material/Box'

function App() {

  return (

      <NoteListContextProvider>
        
        <div className="App" 
          style={{
            position: 'fixed',
            top: '0',
            right: '0',
            left: '0',
            bottom: '0'
          }}>

          <Box sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: '44px 1fr',
            height: '100%',
            bgcolor: '#333',
            color: "#eee"
          }}>

            <TopBar />
            <SideBar />
            <Main />

          </Box>
        </div>
        
      </NoteListContextProvider>
  )
}

export default App
