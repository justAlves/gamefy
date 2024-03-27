import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import HomeCard from './home-card'
import {    } from 'lucide-react'

interface IHomeCard {
    background_image: string;
    name: string;
    metacritic: number;
    id: string;
}

interface IHomeCarousel {
    data: IHomeCard[]
}

export default function HomeCarousel({data}: IHomeCarousel) {
  return (
    <div className='w-full max-w-[1400px] my-4'>
        <Swiper slidesPerView={5} spaceBetween={55} >
            {data.map(item => (
                <SwiperSlide>
                    <HomeCard background_image={item.background_image} name={item.name} metacritic={item.metacritic} id={item.id}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}
