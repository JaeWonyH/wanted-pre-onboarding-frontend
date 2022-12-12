import React, { useEffect, useState } from "react";
import {
  GetBlogAllTr,
  GetBlogAllTable,
  GetBlogAllTableLine,
  PostBlogBtn,
  PostCommentInput
} from "../style/styled";
import axios from "axios";
import TodoDetail from "./TodoDetail";

export default function TodoList() {
  const [todoLists, setTodoLists] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    getTodoLists();
  }, []);

  async function getTodoLists() {
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.get("/todos", {
        withCredentials: false,
      });
      console.log(res.data);
      setTodoLists(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  const todoHandler = (event) => {
    setTodo(event.currentTarget.value);
  };
  async function onSubmit(event) {
    event.preventDefault();
    try {
      axios.defaults.headers.common["Authorization"] = "";
      const JWTTOEKN = localStorage.getItem("jwtToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
      const res = await axios.post(
        "/todos",
        { todo: todo },
        {
          withCredentials: false,
        }
      );
      console.log(res.data);
      getTodoLists();
      setTodo("");
    } catch (error) {
      console.log(error.response.data.message);
    }
  }

  const deleteOnClick = () => {
    console.log("삭제 버튼 눌림");
  };
  const updateOnClick = () => {
    console.log("수정 버튼 눌림");
  };

  const TodoLists = todoLists.map((todoList) => {
    return (  
      <TodoDetail todoList={todoList} />
    );
  });

  return (
    <div>
      <GetBlogAllTable>
        <GetBlogAllTableLine></GetBlogAllTableLine>
        {TodoLists}
        <GetBlogAllTr>
          <td>
            <form onSubmit={onSubmit}>
              <PostCommentInput
                value={todo}
                type="text"
                placeholder="내용을 입력하세요."
                onChange={todoHandler}
              ></PostCommentInput>
              <PostBlogBtn>등록하기</PostBlogBtn>
            </form>
          </td>
        </GetBlogAllTr>
      </GetBlogAllTable>
    </div>
  );
}
