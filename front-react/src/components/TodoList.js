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

export default function TodoList() {
  const [todoLists, setTodoLists] = useState([
    {
      id: 1,
      todo: "todo2",
      isCompleted: false,
      userId: 1,
    },
    {
      id: 2,
      todo: "todo3",
      isCompleted: false,
      userId: 1,
    },
  ]);

  // useEffect(() => {
  //     dispatch(getComment(blogId)).then((res) => {
  //       setTodoLists(res.data)
  //     });
  //   }, []);
  const deleteOnClick = () => {
    console.log("삭제 버튼 눌림");
  };
  const updateOnClick = () => {
    console.log("수정 버튼 눌림");
  };
  const TodoLists = todoLists.map((todoList) => {
    return (
      <GetBlogAllTr>
        <td>
          <GetCommentsDiv>
            <table>
              <tr>
                <GetCommentsHeaderBox>
                  <div>
                    {todoList.isCompleted ? ("완료") : ("비완료")}
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
        </td>
      </GetBlogAllTr>
    );
  });

  return (
    <div>
      <GetBlogAllTable>
        <GetBlogAllTableLine></GetBlogAllTableLine>
        {TodoLists}
      </GetBlogAllTable>
    </div>
  );
}
