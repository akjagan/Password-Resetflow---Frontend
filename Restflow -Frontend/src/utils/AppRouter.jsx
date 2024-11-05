import Login from "../components/Login.jsx"
import ForgotPassword from "../components/ForgotPassword.jsx"
import ResetPassword from "../components/ResetPassword.jsx"
import { Navigate } from "react-router-dom"
import Register from "../components/Register.jsx"

const AppRouter = [
    {
        path: '/user/create',
        element: <><Register /></>
    },
    {
        path: '/user/login',
        element: <><Login /></>
    },
    {
        path: '/user/forgot-password',
        element: <><ForgotPassword /></>
    },
    {
        path: '/user/reset-password/:token',
        element: <><ResetPassword /></>
    },
    {
        path: '*',
        element: <Navigate to = "/user/login" />
    }
]

export default AppRouter;