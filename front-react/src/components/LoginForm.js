import React, { useCallback, useState, useEffect } from "react";
import {
  PwVector,
  EmailInput,
  PwInput,
  LoginBtn,
  LogInComponent,
  LogInInsideBox,
  LogoImg,
  SignupTag,
  TagBox,
  PwInputBox,
} from "../style/styled";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import axios from "axios";

function LoginForm() {
  useEffect(() => {
    if (localStorage.getItem('jwtToken')) {
        alert('로그인 정보가 있습니다.');
        navigate('/todo');
    }
}, []);
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [vector, setVector] = useState(false);
  const emailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const pwHandler = (event) => {
    setPw(event.currentTarget.value);
  };

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const res = await axios.post(
        "/auth/signin",
        { email: email, password: pw },
        {
          withCredentials: false,
        }
      );
      localStorage.setItem("jwtToken", res.data.access_token); //로컬 스토리지에 쿠키 저장
      navigate("/todo");
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  const onClickVector = useCallback(() => {
    setVector(!vector);
    console.log(vector);
  }, [vector]);

  return (
    <LogInComponent>
      <LogInInsideBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <form onSubmit={onSubmit}>
          <EmailInput
            value={email}
            onChange={emailHandler}
            type="text"
            placeholder="이메일"
          />
          <PwInputBox>
            <PwInput
              value={pw}
              onChange={pwHandler}
              type={vector === false ? "password" : "text"}
              placeholder="비밀번호"
            />
            <div onClick={onClickVector}>
              <PwVector color="black"></PwVector>
            </div>
          </PwInputBox>
          <LoginBtn>로그인</LoginBtn>
          <TagBox>
            <SignupTag href="/signUp">회원가입</SignupTag>
          </TagBox>
        </form>
      </LogInInsideBox>
    </LogInComponent>
  );
}

export default LoginForm;
