import AddService from "../Pages/AddService/AddService";
import SignIn from "../Pages/Authentication/Login/SignIn";
import SignUp from "../Pages/Authentication/Register/SignUp";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: ErrorPage } = require("../Shared/ErrorPage");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://aqibamanacademy-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            }
        ]
    }
])
export default router;