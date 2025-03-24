import { useState } from "react";
import { Button } from "../components/Button";
import { InputBox } from "../components/input-box";
import {Link} from "react-router-dom"
import axios from "axios";

export  function SignIn(){
  const [username, setUserName]=useState("");
  const [password, setPassword]=useState("");
    return <div className="h-screen w-screen bg-slate-600 flex justify-center items-center">
        <div className=" flex flex-col w-[400px] h-[350px] bg-white rounded border-2">
            <div className="text-2xl font-bold flex justify-center items-center mt-2">SignIn</div>
            <div className="flex flex-col justify-center items-center mt-2 gap-3 p-3 ">
              <InputBox onChange={(e)=>setUserName(e.target.value)} type={"text"} placeholder= {"john123"} label={"Username"}/>
             <InputBox onChange={(e)=>setPassword(e.target.value)} type={"password"} placeholder= {"john@123"} label={"Password"}/>
              <div className="w-full mt-3 " >
                <Button bgColor="bg-black" width={"w-full"} padding={"p-3"}  text="SignIn" onClick={async()=>{
                const response=  await axios.post("http://localhost:3000/api/v1/user/signin",{
                    username,
                    password
                  });
                  localStorage.setItem("token",response.data.token);

                }} ></Button>
              </div>
              <div> Don&apos;t have an account? Please <Link to="/signup" className="text-blue-500 underline">
                Sign Up
            </Link></div>
              
            </div>
        </div>
    </div>
}