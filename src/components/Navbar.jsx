import { FloatingNav } from "./ui/floating-navbar"


const Navbar = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
          name: "Skills",
          link: "#skills",
        },
        {
          name: "Projects",
          link: "#projects",
        },
        ,
        {
          name: "Pinned repo",
          link: "#pinned-repo",
        },
        {
          name: "Contact",
          link: "#contact",
        }
        
    ]
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  )
}

export default Navbar