import OnboardingImage from '@/assets/onboarding.svg'
import { Button } from '@/components/ui/button'

export default function OnBoarding() {
  return (
    <div className='h-screen flex flex-col justify-center items-center p-4'>
      <img src={OnboardingImage} alt="" className='w-64 h-64'/>
      <h1 className='text-2xl text-center font-bold my-4'><span className='text-main'>Gamefy</span>: O Seu Destino Definitivo para Explorar e Compartilhar o Mundo dos Jogos</h1>
      <span className='text-center text-lg'>Transforme sua paixão por jogos em histórias cativantes. Crie listas personalizadas, escreva reviews autênticas e conecte-se com uma comunidade apaixonada por gaming. Descubra novos títulos, reviva clássicos e compartilhe suas experiências no universo Gamefy.</span>
      <Button className='mt-8'>Comece a Explorar Agora</Button>
    </div>
  )
}
