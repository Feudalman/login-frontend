/**
 * 注册框组件
 */

import "../Block.scss";

import { Input } from "antd";
import React, { useState } from "react";

const RegisterBlock = React.forwardRef((props, ref) => {
  /**
   * 这里的代码和登录组件复用率很高
   * 还是那个问题，两个组件本应该集成起来
   * 但是因为个人原因没有弄
   * 想要优化的同学可以优化一下
   */

  let [userInfo, setUserInfo] = useState({
    account: "",
    password: "",
  });

  const handleInput = (e, type) => {
    let temp = JSON.parse(JSON.stringify(userInfo));
    if (type === "account") {
      temp.account = e.target.value;
    } else {
      temp.password = e.target.value;
    }
    setUserInfo(temp);
    props.getData(temp);
  };

  return (
    <div className="LoginBlock">
      <div className="inputItem">
        <span>邮箱: </span>
        <Input
          placeholder="请输入邮箱"
          value={userInfo.account}
          onChange={(e) => handleInput(e, "account")}
          type="text"
        ></Input>
      </div>
      <div className="inputItem">
        <span>密码: </span>
        <Input
          placeholder="请牢记您的密码"
          value={userInfo.password}
          onChange={(e) => handleInput(e, "password")}
          type="password"
        ></Input>
      </div>
    </div>
  );
});

export default RegisterBlock;
