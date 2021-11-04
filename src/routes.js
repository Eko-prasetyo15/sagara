import Home from "./Pages/Home"
import Login from "./Pages/Login"
import News from "./Pages/NewsList"
import Detail from "./Pages/NewsDetail"
// import Payment from "./Pages/Payment"
// import Offers from "./Pages/Offers"

var LayoutRoute = [
    {
        path: "/",
        exact: true,
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/news",
        name: "News",
        component: News
    },
    {
        path: "/news-detail",
        name: "News-Detail",
        component: Detail
    },
 


];

export default LayoutRoute