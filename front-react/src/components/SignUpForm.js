import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignUpNormalInput,
  SignUpBtn,
  CheckWarnTxt,
  SignUpComponent,
  SignUpTxt,
  SignUpTxt2,
  SignUpInsideBox,
  LogoImg,
  BlackLine,
  ExplainTxt,
} from "../style/styled";
import logo from "../img/logo.png";
import axios from "axios";

export default function SignUpForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [pwError, setPwError] = useState(false);
  const [pwCheckError, setPwCheckError] = useState(false);

  const gotoHome = () => {
    navigate("/");
  };

  const emailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const pwHandler = (event) => {
    setPw(event.currentTarget.value);
  };

  const pwCheckHandler = (event) => {
    setPwCheck(event.currentTarget.value);
  };

  const emailBlur = useCallback(() => {
    const rgx = /@/;
    if (email.length === 0) {
      return setEmailError(true);
    }
    if (!rgx.test(email)) {
      return setEmailError(true);
    }
    return setEmailError(false);
  }, [email]);

  const pwBlur = useCallback(() => {
    if (pw.length < 8) {
      return setPwError(true);
    }
    return setPwError(false);
  }, [pw]);

  const pwCheckBlur = useCallback(() => {
    if (pw !== pwCheck) {
      return setPwCheckError(true);
    }
    return setPwCheckError(false);
  }, [pwCheck, pw]);

  async function signUp() {
    try {
      const res = await axios.post(
        "/auth/signup",
        { email: email, password: pw },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      alert("회원가입이 완료되었습니다!")
      navigate("/")
    } catch (error) {
      alert(error.response.data.message);
    }
  }

  const onSubmit = useCallback(() => {
    if (emailError || pwError || pwCheckError) {
      alert("유효성 검사를 확인해주세요.");
      return;
    }
    if (!emailError && !pwError && !pwCheckError) {
      signUp();
    }
  }, [email, pw, pwCheck, emailError, pwError, pwCheckError]);

  return (
    <SignUpComponent>
      <SignUpInsideBox>
        <LogoImg src={logo} onClick={gotoHome}></LogoImg>
        <BlackLine></BlackLine>
        <SignUpTxt>회원가입하기</SignUpTxt>
        <SignUpTxt2>회원가입에 필요한 정보를 입력해주세요</SignUpTxt2>
        <div>
          <input type="hidden" />
          <ExplainTxt>이메일</ExplainTxt>
          <SignUpNormalInput
            value={email}
            onChange={emailHandler}
            type="text"
            onBlur={emailBlur}
            placeholder="이메일아이디"
          />

          {emailError === true ? (
            <CheckWarnTxt>
              이메일 형식을 맞쳐주세요. (@ 반드시 포함)
            </CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>비밀번호</ExplainTxt>
          <SignUpNormalInput
            value={pw}
            onChange={pwHandler}
            type="password"
            onBlur={pwBlur}
            placeholder="비밀번호"
          />
          {pwError === true ? (
            <CheckWarnTxt>8자 이상 입력하세요.</CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <ExplainTxt>비밀번호 확인</ExplainTxt>
          <SignUpNormalInput
            value={pwCheck}
            onChange={pwCheckHandler}
            type="password"
            onBlur={pwCheckBlur}
            placeholder="비밀번호를 다시 입력해주세요"
          />
          {pwCheckError === true ? (
            <CheckWarnTxt>비밀번호가 일치하지 않습니다.</CheckWarnTxt>
          ) : (
            <CheckWarnTxt />
          )}
          <SignUpBtn onClick={onSubmit}>회원가입</SignUpBtn>
        </div>
      </SignUpInsideBox>
    </SignUpComponent>
  );
}
