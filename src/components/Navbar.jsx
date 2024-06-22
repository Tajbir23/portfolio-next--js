import { FloatingNav } from "./ui/floating-navbar"


const Navbar = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
          name: "Technology",
          link: "/about",
        },
        {
          name: "Projects",
          link: "/projects",
        },
        {
          name: "Contact",
          link: "/contact",
        }
        
    ]
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  )
}

export default Navbar