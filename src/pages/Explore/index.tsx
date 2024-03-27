import Sidebar from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import axios from 'axios'
import HomeCarousel from "@/components/ui/home-carousel";
import { useSidebar } from "@/contexts/sidebar";

export default function Explore() {
  const {toggle} = useSidebar()
  const [newGames, setNewGames] = useState([])
  const [topGames, setTopGames] = useState([])

  function formatarData(data) {
    const ano = data.getFullYear();
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const dia = data.getDate().toString().padStart(2, '0');
    return ano + '-' + mes + '-' + dia;
}


  useEffect(() => {
    async function getGames() {
      const response = await axios.get("https://api.rawg.io/api/games?key=27d301230e9d4668932f2b47939abcf4&ordering=-added").then(response => {
        setTopGames(response.data.results)
      })

      const hoje = new Date();

      const umaSemanaAtras = new Date();
      umaSemanaAtras.setDate(umaSemanaAtras.getDate() - 7);

      const hojeFormatado = formatarData(hoje)
      const umaSemanaAtrasFormatado = formatarData(umaSemanaAtras)

      

      const responseNew = await axios.get(`https://api.rawg.io/api/games?key=27d301230e9d4668932f2b47939abcf4&dates=${umaSemanaAtrasFormatado},${hojeFormatado}`).then(response => {
        setNewGames(response.data.results)
      })  
    }

    getGames();
  }, [])

  return (
    <div className="h-screen flex">
        <Sidebar/>
        <div className={`h-full p-4 ${toggle ? "ml-[6rem]" : "ml-[21rem]"}`}>
          <h1 className="font-bold text-3xl">Novos Jogos</h1>
          <HomeCarousel data={newGames}/>
          <h1 className="font-bold text-3xl">Top Jogos</h1>
          <HomeCarousel data={topGames}/>
          <h1 className="font-bold text-3xl">Top Reviews</h1>
          <HomeCarousel data={topGames}/>
          <h1 className="font-bold text-3xl">Gêneros</h1>
          <HomeCarousel data={topGames}/>
        </div>
    </div>
  )
}
