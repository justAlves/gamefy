import {Star} from 'lucide-react'
import { useNavigate } from 'react-router-dom';

interface IHomeCard {
    background_image: string;
    name: string;
    metacritic: number;
    id: string;
}

export default function HomeCard(data: IHomeCard) {

    const navigate = useNavigate()

    function handleNavigate(){
        navigate("/game/")
    }
    
  return (
    <div className='flex flex-col w-64 rounded overflow-hidden border hover:bg-white/10 cursor-pointer' onClick={handleNavigate}>
        <img className='rounded h-40 object-cover' src={data.background_image} alt="" />
        <div className='p-2 flex items-center justify-between'>
            <div className='w-2/3 text-ellipsis whitespace-nowrap overflow-hidden'>
                <span className='font-semibold'>{data.name}</span>
            </div>
            <div className='flex gap-2'>
                <Star className='text-yellow-500'/>
                {data.metacritic}
            </div>
        </div>
    </div>
  )
}
