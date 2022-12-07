import React, { useState, useCallback } from "react";
import {
  LinkCategory,
  HeaderComponent,
  LogoImg,
  HomeMenu,
  HeaderComponentBox,
  HomeMenuList,
  HamburgerMenu,
} from "../style/styled";
import logo from "../img/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const JWTTOKEN = localStorage.getItem("jwtToken");
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const onClickMenu = () => {
    setMenu(!menu);
  };
  const onClickLogo = () => {
    navigate("/");
  };
  const onClickLogOut = useCallback(() => {
    console.log("로그아웃");
    localStorage.removeItem("jwtToken");
    navigate("/");
  }, []);

  const onClickLogIn = () => {
    console.log("로그인");
    navigate("/login");
  };
  return (
    <div>
      <HeaderComponent>
        <LinkCategory>
          <HamburgerMenu onClick={onClickMenu} show={menu}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerMenu>
        </LinkCategory>
        <div style={{ marginRight: "100px" }}>
          <LogoImg
            onClick={onClickLogo}
            src={logo}
            width={61}
            height={35}
            marginTop={1}
          ></LogoImg>
        </div>
        <div></div>
      </HeaderComponent>

      {JWTTOKEN ? (
        <HomeMenu show={menu} logIn={JWTTOKEN ? true : false}>
          <HomeMenuList onClick={onClickLogOut}>로그아웃</HomeMenuList>
        </HomeMenu>
      ) : (
        <div></div>
      )}
    </div>
  );
}
