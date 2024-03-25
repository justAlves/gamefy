import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from 'lucide-react'
import { useState } from "react";

export default function Register() {

    const [show, setShow] = useState(false);

    function handleShow(){
        setShow(!show)
    }

  return (
    <div className="h-screen max-h-screen flex flex-col justify-center items-center">
        <div className="bg-main p-4 rounded-xl flex items-center shadow-md">
            <h1 className="text-3xl text-white font-bold">GAME</h1>
            <span className="text-3xl font-bold text-comp">fy</span>
        </div>
        
        <div className="border p-4 shadow-md rounded md:w-1/5 flex flex-col justify-center mt-4">
            <span className="mb-4 font-bold">Nome de úsuario: </span>
            <Input
                placeholder="Digite seu nome de úsuario"
            />
            <span className="my-4 font-bold">Email: </span>
            <Input
                placeholder="Digite seu email"
                type="email"
            />
            <span className="my-4 font-bold">Senha: </span>
            <div className="flex items-center gap-2">
                <Input
                    placeholder="Digite sua senha"
                    type={show ? "text" : "password"}
                    
                />
                {
                    show ? (
                        <Eye className="cursor-pointer" onClick={handleShow}/>
                    ) : (
                        <EyeOff className="cursor-pointer" onClick={handleShow}/>
                    )
                }
            </div>
            <span className="my-4 font-bold">Confirmar senha: </span>
            <Input
                placeholder="Digite sua senha"
                type={show ? "text" : "password"}
            />
            
            <Button className="mt-4 font-bold">Cadastrar</Button>
            <a href="/login" className="text-sm mt-2 text-black/50 text-center hover:underline">Já possui uma conta? Entre agora mesmo!</a>
        </div>
    </div>
  )
}
