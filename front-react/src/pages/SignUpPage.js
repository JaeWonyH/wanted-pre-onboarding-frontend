import React from "react";
import SignUpForm from "../components/SignUpForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpPage(){
    const navigate = useNavigate();
    const JWTTOKEN = localStorage.getItem('jwtToken')
    useEffect(()=>{
        if(JWTTOKEN){
            alert("로그인 정보가 있습니다.")
            navigate("/todo")
        }
    },[]);
    return(
        <div>
            <SignUpForm />
        </div>
    )
}