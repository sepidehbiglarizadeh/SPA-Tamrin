import AboutUsPage from "./components/pages/AboutusPage";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";

const routes=[
    {path:"/",element:<HomePage/>,exact:true},
    {path:"/about-us",element:<AboutUsPage/>},
    {path:"/profile",element:<ProfilePage/>},

]

export default routes;