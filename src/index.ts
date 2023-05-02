import Index from "./pages/Login";
import Block from "./core/Block";
import renderDOM from "./core/renderDom";
import Register from "./pages/Register";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import EditProfile from "./pages/EditProfile";
import Messenger from "./pages/Messenger";
import Error500 from "./pages/Error500";
import Error404 from "./pages/Error404";

const login = new Index();
const register = new Register();
const chat = new Chat();
const profile = new Profile();
const changePassword = new ChangePassword();
const editProfile = new EditProfile();
const messenger = new Messenger();
const error404 = new Error404();
const error500 = new Error500();

const pageRoutes: { [key: string]: Block } = {
  "/": login,
  "/register": register,
  "/chat": chat,
  "/profile": profile,
  "/profile/change-password": changePassword,
  "/profile/edit": editProfile,
  "/messenger": messenger,
  "/404": error404,
  "/500": error500,
};

const location = pageRoutes[window.location.pathname] || error404;

renderDOM(location, "root");
