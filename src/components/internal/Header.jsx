import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import { Separator } from "@radix-ui/react-separator"

const Header = () => {
  return (
    <div className="py-6 dark:bg-neutral-900 dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl poppins-regular tracking-tight text-black dark:text-white">Amaan</Link>

        <div className="md:flex items-center gap-6 hidden ">
          <Link className="hover:text-blue-500">Resources</Link>
          <Link className="hover:text-blue-500">About</Link>
          <Link className="hover:text-blue-500">contect me</Link>
        </div>

        <div className="md:hidden">
          <Sheet className="">
            <SheetTrigger><Menu className="text-blue-600" /></SheetTrigger>
            <SheetContent className="dark:bg-neutral-800">
              {/* <SheetTitle></SheetTitle> */}
              <SheetDescription className="flex flex-col justify-center items-center gap-8 dark:bg-neutral-800">
                <Separator/>
                <Link className="hover:text-blue-400">Resources</Link>
                
                <Link className="hover:text-blue-400">About</Link>
                <Link className="hover:text-blue-400">Contect me</Link>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>



    </div>
  )
}

export default Header