import React from "react";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage(){
    const navigate = useNavigate();
    const JWTTOKEN = localStorage.getItem('jwtToken')
    useEffect(()=>{
        if(JWTTOKEN){
            alert("로그인 정보가 있습니다.")
            navigate("/todo")
        }
    },[]);
    return(
        <LoginForm />
    )
}