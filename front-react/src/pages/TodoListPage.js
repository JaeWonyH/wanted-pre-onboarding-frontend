import React from "react";
import TodoList from "../components/TodoList";
import Header from "../components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoListPage(){
    const navigate = useNavigate();
    const JWTTOKEN = localStorage.getItem('jwtToken')
    useEffect(()=>{
        if(JWTTOKEN===null){
            alert("로그인 정보가 없습니다.")
            navigate("/")
        }
    },[JWTTOKEN]);
    return(
        <div>
            <Header />
            <TodoList />
        </div>
    )
}