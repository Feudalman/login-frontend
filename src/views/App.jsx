/**
 * 项目入口
 */

import { useRoutes } from "react-router-dom";
import routes from "../router";

export default function App() {
  // 导入路由
  const elements = useRoutes(routes);

  return <>{elements}</>;
}
