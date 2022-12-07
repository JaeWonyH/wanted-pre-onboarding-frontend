import styled from "styled-components";
import { ReactComponent as MySvg } from "../img/Vector-2.svg";
//중첩 스타일
export const LogoImg = styled.img`
    width: ${(props) => (props.width ? `${props.width}px` : "120.85px")};
    height: ${(props) => (props.height ? `${props.height}px` : "72px")};
    margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "91px")};
    cursor: pointer;
  `;
  export const BlackLine = styled.div`
    width: ${(props) => (props.width ? `${props.width}px` : "300px")};
    height: 0px;
    margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "60px")};
    border: ${(props) =>
      props.checkColor ? `1px solid ${props.checkColor}` : `1px solid #e5e5e5`};
  `;

//LoginPage 스타일
export const LogInComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LogInInsideBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginBtn = styled.button`
  width: 400px;
  height: 60px;
  margin-top: 15px;
  background: #222222;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
  text-align: center;
  letter-spacing: -0.1em;
  color: #ffffff;
`;

export const EmailInput = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 60px;
  margin-top: 60px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  &::placeholder {
    color: #333333;
    line-height: 23px;
    letter-spacing: -0.1em;
  }
`;
export const PwInput = styled.input`
  box-sizing: border-box;
  width: 400px;
  height: 60px;
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  &::placeholder {
    line-height: 23px;
    letter-spacing: -0.1em;
    color: #333333;
  }
`;
export const PwInputBox = styled.div`
  display: flex;
  z-index: 1;
  opacity: 1;
  position: relative;
`;

export const PwVector = styled(MySvg)`
  position: absolute;
  right: 24px;
  top: 33px;
  cursor: pointer;
  background: auto;
  opacity: 0.7;
  & path {
    fill: ${({ color }) => color || ""};
  }
  &:hover path {
    fill: ${({ color }) => color || "#333333"};
    opacity: 1;
  }
`;

export const TagBox = styled.div`
  margin-top: 15px;
  width: 400px;
  display: flex;
  justify-content: space-between;
`;
export const SignupTag = styled.a`
  text-decoration: none;
  height: 23px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;
  color: #333333;
`;

//signUp 페이지 스타일링
export const SignUpComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignUpInsideBox = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SignUpTxt = styled.span`
  height: 67px;
  margin-top: 40px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 46px;
  line-height: 67px;
  display: flex;
  align-items: center;
  letter-spacing: -0.1em;
  text-transform: uppercase;
  color: #333333;
`;
export const SignUpTxt2 = styled.span`
  height: 26px;
  margin-top: 5px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  letter-spacing: -0.1em;
  text-transform: uppercase;
  color: #999999;
`;
export const SignUpNormalInput = styled.input`
  box-sizing: border-box;
  width: 600px;
  height: 60px;
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;
  &::placeholder {
    color: #999999;
  }
`;

export const SignUpBtn = styled.button`
  width: 600px;
  height: 60px;
  margin-top: 40px;
  margin-bottom: 200px;
  background: #222222;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.1em;
  cursor: pointer;
  color: #ffffff;
`;
export const ExplainTxt = styled.div`
  height: 20px;
  margin-top: 40px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.1em;

  color: #333333;
`;

export const CheckWarnTxt = styled.span`
  height: 23px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.1em;
  color: #ff0000;
`;

//Header 스타일링
export const LinkCategory = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
`;

export const HeaderComponent = styled.div`
  top: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HomeMenu = styled.div`
  width: 100%;
  height: ${(props) => (props.logIn === false ? "10vh" : "40vh")};

  display: ${(props) => (props.show === false ? "none" : "block")};
`;
export const HeaderComponentBox = styled.div`
position: fixed;
top: 0;
z-index: 999;
width: 100%;
display: flex;
flex-direction: column;
background-color: #f5f5f5;
`;
export const HomeMenuList = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  &:hover {
    background: black;
    color: white;
  }
`;
export const HamburgerMenu = styled.div`
  width: 40px;
  height: 30px;
  position: relative;
  display: inline-block;
  transition: all 0.4s;
  box-sizing: border-box;
  margin-right: 34px;
  margin-left: 10px;
  cursor: pointer;
  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: black;
    border-radius: 4px;
    transition: all 0.4s;
    box-sizing: border-box;
  }
  span:nth-of-type(1) {
    top: 0;
    -webkit-transform: ${(props) =>
      props.show ? "translateY (13px) rotate (-45deg)" : ""};
    transform: ${(props) =>
      props.show ? "translateY(13px) rotate(-45deg)" : ""};
  }

  span:nth-of-type(2) {
    top: 13px;
    opacity: ${(props) => (props.show ? "0" : "")};
  }

  span:nth-of-type(3) {
    bottom: 0;
    -webkit-transform: ${(props) =>
      props.show ? "translateY(-13px) rotate(45deg)" : ""};
    transform: ${(props) =>
      props.show ? "translateY(-13px) rotate(45deg)" : ""};
  }
`;

//todolist 스타일링
export const GetBlogAllTr = styled.tr`
  width: 50vw;
  margin-top: 20px;
`;
export const GetCommentsDiv = styled.div`
  width: 50vw;
  background: #ffffff;
  border-radius: 15px;
  padding: 10px;
  line-height: 33px;
`;
export const GetCommentsHeaderBox = styled.td`
  width: 50vw;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const GetBlogAllCreated = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #999999;
  margin-right: 10px;
`;
export const GetCommentsMoreBtn = styled.button`
  background: #ffffff;
  border: none;
`;
export const DeleteCommentImg = styled.img`
  width: 15px;
  height: 15px;
  background: #ffffff;
`;
export const GetBlogAllContent = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 350;
  font-size: 16px;
  color: #9a9a9a;
  margin: 10px;
`;
export const GetBlogAllTable = styled.table`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/

  align-items: center;
  justify-content: center;

  border-collapse: separate;
  border-spacing: 0 10px;
  margin-bottom: 20px;
`;
export const GetBlogAllTableLine = styled.div`
  width: 100vw;
  height: 0px;
  border: 1px solid #cccccc;
`;
