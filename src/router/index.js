/**
 * 路由
 */

import Login from "../views/Login";
import Index from "../views/Index";

const routes = [
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/index',
        element: <Index></Index>
    }
]

export default routes