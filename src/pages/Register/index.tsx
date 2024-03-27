import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from 'lucide-react'
import { useState } from "react";
import { z } from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useFirebase } from "@/services/firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { useUserStore } from "@/contexts/user";

const userSchema = z.object({ 
    username: z.string(),
    password: z.string(),
    confirm_password: z.string(),
    email: z.string().email("Digite um email valido!")
 }).refine(({ password, confirm_password}) => password === confirm_password, {
    message: "Password doesn't match",
    path: ["confirm_password"]
})

type UserData = z.infer<typeof userSchema>

export default function Register() {
    const { auth } = useFirebase()

    const {actions: { setUser }} = useUserStore()

    const {register, handleSubmit} = useForm<UserData>({
        resolver: zodResolver(userSchema)
    })

    const [show, setShow] = useState(false);

    function handleShow(){
        setShow(!show)
    }

    async function handleRegister(data: UserData){
        const response = await createUserWithEmailAndPassword(auth, data.email, data.password)    
        sendEmailVerification(response.user)
        updateProfile(response.user, {displayName: data.username})
        setUser(response.user)
    }
    

  return (
    <div className="h-screen max-h-screen flex flex-col justify-center items-center">
        <div className="bg-main p-4 rounded-xl flex items-center shadow-md">
            <h1 className="text-3xl text-white font-bold">GAME</h1>
            <span className="text-3xl font-bold text-comp">fy</span>
        </div>
        
        <form onSubmit={handleSubmit(handleRegister)} className="border p-4 shadow-md rounded sm:w-1/5 flex flex-col justify-center mt-4">
            <span className="mb-4 font-bold">Nome de úsuario: </span>
            <Input
                placeholder="Digite seu nome de úsuario"
                {...register("username")}
            />
            <span className="my-4 font-bold">Email: </span>
            <Input
                placeholder="Digite seu email"
                type="email"
                {...register("email")}
            />
            <span className="my-4 font-bold">Senha: </span>
            <div className="flex items-center gap-2">
                <Input
                    placeholder="Digite sua senha"
                    type={show ? "text" : "password"}
                    {...register("password")}
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
                {...register("confirm_password")}
            />
            
            <Button className="mt-4 font-bold" type="submit">Cadastrar</Button>
            <a href="/login" className="text-sm mt-2 text-black/50 text-center hover:underline">Já possui uma conta? Entre agora mesmo!</a>
        </form>
    </div>
  )
}
