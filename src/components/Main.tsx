import { AppContext, useAppContext } from '../AppContext'

export default function Main() {

  const context = useAppContext()
  
  console.log(context);

  const {isClicked, setIsClicked} = context
  

  const clicker = (event : React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsClicked(isClicked ? false : true)
  }

  return(
    <div className="main" 
      style={{
        gridColumn: isClicked ? '1 / -1' : '2 / -1'
      }} 
      onClick={clicker}>
        Main
    </div>
  )
}