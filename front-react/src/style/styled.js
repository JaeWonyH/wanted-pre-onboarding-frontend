import styled from "styled-components";
import { ReactComponent as MySvg } from "../img/Vector-2.svg";
//중첩 스타일
export const LogoImg = styled.img`
    width: ${(props) => (props.width ? `${props.width}px` : "120.85px")};
    height: ${(props) => (props.height ? `${props.height}px` : "72px")};
    margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "91px")};
    cursor: pointer;
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



 