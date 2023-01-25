/**
 * 登录页
 */

import "./index.scss";

// 引入组件
import RegisterBlock from "./components/RegisterBlock/RegisterBlock";
import LoginBlock from "./components/LoginBlock/LoginBlock";
import { Button } from "antd";

// 引入封装好的api，现在不需要管这个
import { UserLogin, UserRegister } from "../../http/apis";

// 引入Hook
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // Sign in则为登录状态，Sign Up为注册状态
  let [loginState, setLoginState] = useState("Sign In");

  // 存储当前输入的用户信息
  const [userInfo, setUserInfo] = useState({});

  // 使用Hook生成router的操作对象，之后可以使用它进行编程式路由
  const navigate = useNavigate();

  /**
   * 点击右上角切换按钮触发，切换当前输入状态
   * Sign In 为登录状态
   * Sign Up 为注册状态
   */
  const handleSwitch = () => {
    if (loginState === "Sign In") {
      setLoginState("Sign Up");
    } else {
      setLoginState("Sign In");
    }
  };

  /**
   * 点击确认按钮触发
   * @returns 
   */
  const confirm = async () => {
    // 下面是发送请求，检查返回值的过程
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
          {/* 登录/注册
            * 通过三目元算符，判断当前输入状态，更新展示的组件
            * 需要注意的是，在每个组件身上都传入了一个自定义属性
            * 值为Hook返回的响应式数据修改函数
           */}
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
