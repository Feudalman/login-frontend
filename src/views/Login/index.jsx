/**
 * 登录页
 */

import "./index.scss";

import RegisterBlock from "./components/RegisterBlock/RegisterBlock";
import LoginBlock from "./components/LoginBlock/LoginBlock";
import { Button } from "antd";

import { UserLogin, UserRegister } from "../../http/apis";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let [loginState, setLoginState] = useState("Sign In"); // Sign in则为登录状态，Sign Up为注册状态

  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();

  const handleSwitch = () => {
    if (loginState === "Sign In") {
      setLoginState("Sign Up");
    } else {
      setLoginState("Sign In");
    }
  };

  const confirm = async () => {
    let res = null;
    if (loginState === "Sign In") {
      res = await UserLogin(userInfo);
    } else {
      res = await UserRegister(userInfo);
    }
    res = res.data;
    if (res.code === 200) {
      console.log(res);
    } else {
      alert("请检查账号/密码是否错误！");
      return;
    }
    if (loginState === "Sign In") {
      navigate("/index");
    } else {
      alert("注册成功，请重新登录");
    }
  };

  return (
    <>
      {/* 登录框 */}
      <div className="LoginPage">
        {/* 功能区 */}
        <div className="func">
          {/* 切换按钮 */}
          <div className="switchButton" onClick={handleSwitch}>
            {loginState}
          </div>
          {/* 登录/注册 */}
          {loginState === "Sign In" ? (
            <LoginBlock getData={setUserInfo}></LoginBlock>
          ) : (
            <RegisterBlock getData={setUserInfo}></RegisterBlock>
          )}
          {/* 确认 */}
          <Button
            onClick={confirm}
            className="button"
            shape="round"
            size="large"
          >
            {loginState}
          </Button>
        </div>
      </div>
    </>
  );
}
