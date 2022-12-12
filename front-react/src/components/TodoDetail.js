import React, { useState, useCallback } from "react";
import moreBtn from "../img/moreBtn.png";
import deleteImg from "../img/delete.png";
import editImg from "../img/edit.png";
import checkedImg from "../img/checked.png";
import unCheckedImg from "../img/unChecked.png";
import {
  GetBlogAllTr,
  GetCommentsDiv,
  GetCommentsHeaderBox,
  GetBlogAllCreated,
  GetCommentsMoreBtn,
  DeleteCommentImg,
  GetBlogAllContent,
  PostBlogBtn,
  PostCommentInput,
} from "../style/styled";
import axios from "axios";

export default function TodoDetail({ todoList }) {
  const [updateState, setUpdateState] = useState(false);
  const [isCompletedState, setIsCompletedState] = useState(
    todoList.isCompleted
  );
  const [todoState, setTodoState] = useState(todoList.todo);
  const [todo, setTodo] = useState({
    todo: String,
    isCompleted: Boolean,
  });
  const todoHandler = (event) => {
    setTodoState(event.currentTarget.value);
    setTodo({
      isCompleted: isCompletedState,
      todo: event.currentTarget.value,
    });
  };
  const isCompletedHandler = (event) => {
    console.log(event.currentTarget.checked);
    setIsCompletedState(event.currentTarget.checked);
    setTodo({
      isCompleted: event.currentTarget.checked,
      todo: todoState,
    });
  };
  async function deleteTodo() {
    var result = window.confirm("삭제하시겠습니까?")
    if(result){
        try {
            axios.defaults.headers.common["Authorization"] = "";
            const JWTTOEKN = localStorage.getItem("jwtToken");
            axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
            const res = await axios.delete(`/todos/${todoList.id}`, {
              withCredentials: false,
            });
            window.location.reload();
          } catch (error) {
            console.log(error.response.data.message);
          }
    }
    
  }
  async function putTodo() {
    var result = window.confirm("수정하시겠습니까?")
    if(result){
        try {
            axios.defaults.headers.common["Authorization"] = "";
            const JWTTOEKN = localStorage.getItem("jwtToken");
            axios.defaults.headers.common["Authorization"] = `Bearer ${JWTTOEKN}`;
            const res = await axios.put(
              `/todos/${todoList.id}`,
              { todo: todo.todo, isCompleted: todo.isCompleted },
              {
                withCredentials: false,
              }
            );
            window.location.reload();
          } catch (error) {
            console.log(error.response.data.message);
          }
    }   
  }
  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(todo);
      putTodo();
    },
    [isCompletedState, todoState, todo, isCompletedHandler, todoHandler]
  );

  const deleteOnClick = () => {
    console.log("삭제 버튼 눌림");
    deleteTodo();
  };
  const updateOnClick = () => {
    console.log("수정 버튼 눌림");
    setUpdateState(!updateState);
  };
  const removeUpdate = () => {
    setUpdateState(!updateState);
  }
  return (
    <GetBlogAllTr>
      <td>
        <GetCommentsDiv>
          <table>
            <tr>
              <GetCommentsHeaderBox>
                <div>
                  {todoList.isCompleted ? (
                    <DeleteCommentImg src={checkedImg} />
                  ) : (
                    <DeleteCommentImg src={unCheckedImg} />
                  )}
                </div>
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
        {updateState ? (
          <td>
            <form onSubmit={onSubmit}>
              <PostCommentInput
                value={todoState}
                type="text"
                placeholder="내용을 입력하세요."
                onChange={todoHandler}
              ></PostCommentInput>
              {isCompletedState ? (
                <input
                  value={isCompletedState}
                  type="checkbox"
                  onChange={isCompletedHandler}
                  checked
                ></input>
              ) : (
                <input
                  value={isCompletedState}
                  type="checkbox"
                  onChange={isCompletedHandler}
                ></input>
              )}
              <PostBlogBtn>수정</PostBlogBtn>
              <PostBlogBtn onClick={removeUpdate}>취소</PostBlogBtn>
            </form>
          </td>
        ) : (
          <div></div>
        )}
      </td>
    </GetBlogAllTr>
  );
}
