import "../Block.scss";

// 输入框组件使用的是antd组件库中的
import { Input } from "antd";
// 函数式组件，需要引入Hook useState
import React, { useState } from "react";

/**
 * 因为需要使用ref传参，所以使用React.forwardRef
 * 现在推荐使用函数式组件，类式组件比较冗杂
 */
const LoginBlock = React.forwardRef((props, ref) => {
  // 用户信息
  let [userInfo, setUserInfo] = useState({
    account: "",
    password: "",
  });

  // 输入触发，使用受控输入
  const handleInput = (e, type) => {
    /**
     * 这里为什么要这样写呢？
     * 因为如果修改userInfo，就是在响应式原型上面修改，没有作用
     * 如果直接 let temp = userInfo，虽然变量不同，但是都指向同一个地址
     * 修改temp和修改userInfo其实本质都一样
     * 所以现在要是用深拷贝，如果不了解，可以看看浅/深拷贝
     * 还可以看看这篇博客：https://blog.csdn.net/qq_51574759/article/details/128487007?spm=1001.2014.3001.5501
     */
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
