import React, { useState } from "react";
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
} from "../style/styled";
import axios from "axios";

export default function TodoDetail({ todoList }) {
  const [updateState, setUpdateState] = useState(false);
  async function deleteTodo() {
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
  const deleteOnClick = () => {
    console.log("삭제 버튼 눌림");
    deleteTodo();
  };
  const updateOnClick = () => {
    console.log("수정 버튼 눌림");
    setUpdateState(!updateState);
  };
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
}
