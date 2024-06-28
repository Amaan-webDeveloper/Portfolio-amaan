import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "@radix-ui/react-separator"
import { useState } from "react"

const Header = ({ themeBtn, currentTheme }) => {
  const darkMode = currentTheme;
  const [toggleMenuBtn, setToggleMenuBtn] = useState(false)
  return (
    <div className="py-6 dark:bg-neutral-900 dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl poppins-regular tracking-tight text-black dark:text-white">Amaan</Link>

        {/* 

        <div className="md:hidden">
         
        </div> */}

        <nav className='dark:bg-neutral-900 bg-white'>
          <button onClick={() => setToggleMenuBtn(!toggleMenuBtn)} type='button' className='bg-blue-500 rounded-lg px-3 py-2 text-white hover:bg-blue-600 active:bg-blue-700 md:hidden'> menu</button>

          <div className={`md:flex md:relative z-20 bg-inherit inset-0 md:left-0 md:px-0 md:py-0 py-6 px-8 ${toggleMenuBtn ? "left-0" : "left-full"} fixed items-center  justify-between gap-7 duration-150 ease-in overflow-hidden`}>

            <button onClick={() => setToggleMenuBtn(!toggleMenuBtn)} type='button' className='bg-blue-500 rounded-lg px-3 py-1 text-white hover:bg-blue-600 active:bg-blue-700 md:hidden absolute  right-4'>X</button>

            <Link className="hover:text-blue-500 flex justify-center md:mt-0 mt-8">Resources</Link>
            <Link className="hover:text-blue-500 flex justify-center md:mt-0 mt-8">About</Link>
            <Link className="hover:text-blue-500 flex justify-center md:mt-0 mt-8">contect me</Link>
            <div className="hover:text-blue-500 flex justify-center md:mt-0 mt-8">
            <Button className="w-full" onClick={themeBtn}>{darkMode ? "Light" : "Dark"}</Button>
            </div>





          </div>


        </nav>

      </div>



    </div>
  )
}

export default Header

{/* <Sheet className="dark:bg-neutral-900">
            <SheetTrigger><Menu className="text-blue-600 dark:bg-neutral-900" /></SheetTrigger>
            <SheetContent className="dark:bg-neutral-800">
              {/* <SheetTitle></SheetTitle> 
              <SheetDescription className="flex flex-col justify-center items-center gap-8 dark:bg-neutral-800">
                <Separator />
                <Link className="hover:text-blue-400">Resources</Link>

                <Link className="hover:text-blue-400">About</Link>
                <Link className="hover:text-blue-400">Contect me</Link>
                <Button className="w-full" onClick={themeBtn}>{darkMode ? "Light" : "Dark"}</Button>
              </SheetDescription>
            </SheetContent>
          </Sheet> */}