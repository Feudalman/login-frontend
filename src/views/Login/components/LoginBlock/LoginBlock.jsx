import "../Block.scss";

import { Input } from "antd";
import React, { useState } from "react";

const LoginBlock = React.forwardRef((props, ref) => {
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
        <span>账号: </span>
        <Input
          placeholder="请输入您的账号(邮箱)"
          value={userInfo.account}
          onChange={(e) => handleInput(e, "account")}
          type="text"
        ></Input>
      </div>
      <div className="inputItem">
        <span>密码: </span>
        <Input
          placeholder="请输入您的密码"
          value={userInfo.password}
          onChange={(e) => handleInput(e, "password")}
          type="password"
        ></Input>
      </div>
    </div>
  );
});

export default LoginBlock;
