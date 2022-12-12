import React, { useState,useEffect } from "react";
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
  PostBlogBtn,
  PostCommentInput,
} from "../style/styled";

export default function TodoDetail({todoList}) {
    const deleteOnClick = () => {
        console.log("삭제 버튼 눌림");
      };
      const updateOnClick = () => {
        console.log("수정 버튼 눌림");
      };
      console.log(todoList);
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
