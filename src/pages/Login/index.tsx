import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GoogleLogo from '@/assets/google.svg'
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react'
import { z } from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { useFirebase } from "@/services/firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

const userSchema = z.object({ 
    password: z.string(),
    email: z.string().email("Digite um email valido!")
 })

type UserData = z.infer<typeof userSchema>

export default function Login() {
    const provider = new GoogleAuthProvider()
    const [show, setShow] = useState(false);

    const { auth } = useFirebase()

    const navigate = useNavigate()

    const {register, handleSubmit} = useForm<UserData>({
        resolver: zodResolver(userSchema)
    })


    function handleShow(){
        setShow(!show)
    }

    function handleLogin(data: UserData){
        console.log(data)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        signInWithEmailAndPassword(auth, data.email, data.password).then(data => {
            navigate("/dashboard")
        })
    }

    function handleGoogleLogin(){
        signInWithPopup(auth, provider).then(data => {
            GoogleAuthProvider.credentialFromResult(data)
            navigate("/dashboard")
        })
    }

  return (
    <div className="h-screen max-h-screen flex flex-col justify-center items-center">
        <div className="bg-main p-4 rounded-xl flex items-center shadow-md">
            <h1 className="text-3xl text-white font-bold">GAME</h1>
            <span className="text-3xl font-bold text-comp">fy</span>
        </div>
        
        <form onSubmit={handleSubmit(handleLogin)} className="border p-4 shadow-md rounded md:w-1/5 flex flex-col justify-center mt-4">
            <span className="mb-4 font-bold">Email: </span>
            <Input
                placeholder="Digite seu email"
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
          
            <a href="" className="text-sm text-black/50 hover:underline">Esqueceu a senha?</a>
            
            <Button className="mt-4 font-bold" type="submit">Entrar</Button>
            <div className="flex justify-center mt-4 items-center">
                <Separator className="w-40"/>
                <span className="mx-2">ou</span>
                <Separator className="w-40"/>
            </div>
            <Button className="mt-4 font-bold gap-2" onClick={handleGoogleLogin}><img src={GoogleLogo} className="w-4 h-4"/>Entrar com o Google</Button>
            <a href="/register" className="text-sm mt-2 text-black/50 text-center hover:underline">Não possui uma conta? cadastre agora mesmo!</a>
        </form>
    </div>
  )
}
