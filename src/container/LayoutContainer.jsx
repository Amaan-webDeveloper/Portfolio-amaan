import { Button, Header } from "@/components"
import { useState } from "react"
import { Outlet } from "react-router-dom"


const LayoutContainer = ({children}) => {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode =()=>{
    setDarkMode(!darkMode)
  }
  
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-col dark:bg-neutral-900 min-h-screen">
        <Header/>
        <Button onClick={toggleDarkMode} className="absolute top-16 right-8">{darkMode?"Light":"Dark"}</Button>
        <div className="container mx-auto flex-1 py-10">
          <Outlet/>
            {children}
        </div>
    </div>
    </div>
  )
}

export default LayoutContainer