import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GoogleLogo from '@/assets/google.svg'
import TwitterLogo from '@/assets/twitter.svg'
import { Separator } from "@/components/ui/separator";

export default function Login() {
  return (
    <div className="h-screen max-h-screen flex flex-col justify-center items-center">
        <div className="bg-main p-4 rounded-xl flex items-center shadow-md">
            <h1 className="text-3xl text-white font-bold">GAME</h1>
            <span className="text-3xl font-bold text-comp">fy</span>
        </div>
        
        <div className="border p-4 shadow-md rounded w-1/5 flex flex-col justify-center mt-4">
            <span className="mb-4 font-bold">Nome de úsuario: </span>
            <Input
                placeholder="ex: @teste"
            />
            <span className="my-4 font-bold">Senha: </span>
            <Input
                placeholder="********"
                type="password"
            />
          
                <a href="" className="text-sm text-black/50 hover:underline">Esqueceu a senha?</a>
            
            <Button className="mt-4 font-bold">Entrar</Button>
            <div className="flex justify-center mt-4 items-center">
                <Separator className="w-40"/>
                <span className="mx-2">ou</span>
                <Separator className="w-40"/>
            </div>
            <Button className="mt-4 font-bold gap-2"><img src={GoogleLogo} className="w-4 h-4"/>Entrar com o Google</Button>
            <Button className="mt-4 font-bold gap-2"><img src={TwitterLogo} className="w-4 h-4"/>Entrar com o Twitter</Button>
            <a href="/register" className="text-sm mt-2 text-black/50 text-center hover:underline">Não possui uma conta? cadastre agora mesmo!</a>
        </div>
    </div>
  )
}
