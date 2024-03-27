import { ChevronFirst, LogOut, Compass, Search, SquareGanttChart, NotebookPen} from 'lucide-react'
import React, { useState } from 'react'
import { useUserStore } from '@/contexts/user'
import { useNavigate } from 'react-router-dom'
import { ModeToggle } from './mode-toggle'
import { signOut } from 'firebase/auth'
import { useFirebase } from '@/services/firebase'

export default function Sidebar() {
    const {store: { user }} = useUserStore()
    const [toggle, setToggle] = useState(false)

    const navigate = useNavigate()
    const {auth} = useFirebase()

    const items = [
      {
        name: "Explorar",
        icon: <Compass/>,
        route: "/explore",
      },
      {
        name: "Pesquisar",
        icon: <Search/>,
        route: "/search",
      },
      {
        name: "Minhas Listas",
        icon: <SquareGanttChart/>,
        route: "/list",
      },
      {
        name: "Minhas Análises",
        icon: <NotebookPen/>,
        route: "/review",
      },
    ]

    function handleNavigate(route: string){
      navigate(route)
    }

    function logout(){
      signOut(auth);
      navigate("/login")
    }

  return (
    <div className={`h-screen flex flex-col p-4 w-[20rem] shadow-lg border-r transition-all ${toggle ? "w-[5rem] items-center" : ""}`}>
        <div className='flex justify-between items-center'>
            <h1 className={`text-xl font-bold transition-all ${toggle ? "hidden" : ""}`}>Game<span className='text-main'>fy</span></h1>
          <div className='flex items-center'>
            <ModeToggle/>
            <ChevronFirst className={`text-black/50 hover:text-black cursor-pointer transition-all duration-500 dark:text-white/75 dark:hover:text-white  ${toggle ? "rotate-180" : ""}`} onClick={() => setToggle(!toggle)}/>
          </div>
        </div>
        <div className={`border mt-4 p-2 rounded flex items-center hover:bg-black/5 cursor-pointer shadow-sm ${toggle ? "p-0 border-none justify-center" : ""}  `}>
          <img src={user?.photoURL as string} alt="Foto de Perfil" className={`w-10 h-10 rounded-full mr-2 ${toggle ? "mr-0" : ""} `}/>
          <div className={`flex flex-col ${toggle ? "hidden" : ""} `}>
            <span className='font-semibold'>@{user?.displayName}</span>
            <button className='flex items-center gap-1 text-red-500 rounded hover:bg-black/5 p-1' onClick={logout}>
              <LogOut size={15}/>
              Sair
            </button>
          </div>
        </div>
        <div className={`flex flex-col`}>
          {items.map(item => (
            <div className={`flex items-center gap-2 mt-8 w-full p-2 rounded hover:border cursor-pointer ${toggle ? "p-0 hover:shadow justify-center" : ""}`} onClick={() => handleNavigate(item.route)} >
              {item.icon}
              <a className={toggle ? "hidden" : ""}>{item.name}</a>
            </div>
          ))}
        </div>
        <div className='flex justify-center items-end  h-full  '>
          <span className='text-xs text-black/55 text-center dark:text-white/55'>Feito por Guilherme Alves.</span>
        </div>
    </div>
  )
}
