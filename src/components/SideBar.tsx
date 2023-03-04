import { useAppContext } from "../AppContext"

export default function SideBar() {

  const { isClicked, setIsClicked } = useAppContext()

  return (
    <div className="sidebar" 
    style={{
      gridColumn: ' 1 / 2',
      display: isClicked ? "none" : 'flex'
    }}>
      Sidebar
    </div>
  )
}