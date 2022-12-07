import React, { useEffect, useState } from "react";
import moreBtn from "../img/moreBtn.png";
import deleteImg from "../img/delete.png";
import editImg from "../img/edit.png";
import {
  GetBlogAllTr,
  GetCommentsDiv,
  GetCommentsHeaderBox,
  GetBlogAllCreated,
  GetCommentsMoreBtn,
  DeleteCommentImg,
  GetBlogAllContent,
  GetBlogAllTable,
  GetBlogAllTableLine,
} from "../style/styled";
import axios from "axios";

export default function TodoList() {
  const [todoLists, setTodoLists] = useState([]);
  const [postListState, setPostListState] = useState(false);
  const [todo, setTodo] = useState("");

  useEffect (()=>{
    getTodoLists();
  },[]);
  
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
  const postOnClick = () => {
    console.log("등록 버튼 눌림");
    setPostListState(!postListState);
  };
  const TodoLists = todoLists.map((todoList) => {
    return (
      <GetBlogAllTr>
        <td>
          <GetCommentsDiv>
            <table>
              <tr>
                <GetCommentsHeaderBox>
                  <div>{todoList.isCompleted ? "완료" : "비완료"}</div>
                  <div></div>
                  <GetBlogAllCreated>
                    <GetCommentsMoreBtn onClick={deleteOnClick}>
                      <DeleteCommentImg src={deleteImg}></DeleteCommentImg>
                    </GetCommentsMoreBtn>
                    <img src={moreBtn}></img>
                    <GetCommentsMoreBtn onClick={updateOnClick}>
                      <DeleteCommentImg src={editImg}></DeleteCommentImg>
                    </GetCommentsMoreBtn>
                  </GetBlogAllCreated>
                </GetCommentsHeaderBox>
              </tr>
              <tr>
                <td>
                  <GetBlogAllContent>{todoList.todo}</GetBlogAllContent>
                </td>
              </tr>
            </table>
          </GetCommentsDiv>
        </td>
      </GetBlogAllTr>
    );
  });

  return (
    <div>
      <GetBlogAllTable>
        <GetBlogAllTableLine></GetBlogAllTableLine>
        {TodoLists}
        <GetBlogAllTr>
          <td>
            <button onClick={postOnClick}>추가하기</button>
            {postListState ? (
              <form onSubmit={onSubmit}>
                <input
                  value={todo}
                  type="text"
                  placeholder="내용을 입력하세요."
                  onChange={todoHandler}
                ></input>
                <button>등록하기</button>
              </form>
            ) : (
              <div></div>
            )}
          </td>
        </GetBlogAllTr>
      </GetBlogAllTable>
    </div>
  );
}
