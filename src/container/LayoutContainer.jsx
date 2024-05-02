import { Header } from "@/components"
import { Outlet } from "react-router-dom"


const LayoutContainer = ({children}) => {
  
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <div className="container mx-auto flex-1 py-10">
          <Outlet/>
            {children}
        </div>
    </div>
  )
}

export default LayoutContainer