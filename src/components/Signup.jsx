import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [city,setCity]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password,name, city
            })
            .then(res=>{ 
                if(res.data === "exist"){
                    alert("User already exists")
                }
                else if(res.data === "notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login text-center justify-center items-center mt-4 ">

            <h1 className="mb-5 text-pretty text-xl font-extrabold bg-purple-300 text-black p-4">SignUp Page</h1>
        <div className="text-center">
            <form action="POST">
                    <input type="email"
                        className="bg-slate-300 block w-full mb-3 p-4 rounded-md"
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Email" />
                    <input type="password"
                        className="bg-slate-300 w-full block mb-3 p-4 rounded-md "
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="Password" />
                    <input type="text"
                        className="bg-slate-300 w-full block mb-3 p-4 rounded-md "
                        onChange={(e) => { setName(e.target.value) }}
                        placeholder="Your Name" />
                    <input type="text"
                        className="bg-slate-300 w-full block mb-6 p-4 rounded-md "
                        onChange={(e) => { setCity(e.target.value) }}
                        placeholder="Enter Your City" />
                    <input type="submit"
                        className="bg-green-500 ml-[600px] text-white font-bold  block mb-3 p-2 rounded-md items-center justify-center"
                        onClick={submit} />

            </form>
        </div>
            <br />
            <p className="text-red-900 font-extrabold mb-2">OR</p>
        

            <Link to="/" className="font-semibold">Login Page</Link>

        </div>
    )
}

export default Login