import { Button, Header } from "@/components"
import { useState } from "react"
import { Outlet } from "react-router-dom"


const LayoutContainer = ({children}) => {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode =()=>{
    console.log("wow")
    setDarkMode(!darkMode)
  }
  
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-col dark:bg-neutral-900 min-h-screen">
        <Header themeBtn={toggleDarkMode} currentTheme={darkMode} />

        {/* <Button onClick={toggleDarkMode} className="absolute top-16 right-8">{darkMode?"Light":"Dark"}</Button> */}
        <div className="container p-0 mx-auto flex-1 ">
          <Outlet/>
            {children}
        </div>
    </div>
    </div>
  )
}

export default LayoutContainer