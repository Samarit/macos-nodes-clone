import AppBar from '@mui/material/AppBar'

export default function TopBar() {
  return(
    <div className="topbar" 
      style={{
        gridColumn: '1 / -1'
      }}>
        <AppBar 
        position='static'
        sx={{
          height: '100%'
        }}>
          TopBar
        </AppBar>
      </div>
  )
}