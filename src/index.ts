import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import EditProfile from "./pages/EditProfile";
import Messenger from "./pages/Messenger";
import Error500 from "./pages/Error500";
import Error404 from "./pages/Error404";
import authenticationController from "./controllers/authenticationController";
import Login from "./pages/Login";
import Router from "./core/Router";

const Routes = {
  Login: "/",
  Registration: "/sign-up",
  Profile: "/profile",
  EditProfile: "/profile/edit",
  Chat: "/messenger",
  Server: "/server-error",
  Password: "/settings/password",
  NotFound: "?",
};

window.addEventListener("DOMContentLoaded", () => {
  authenticationController.getUser();

  Router.use(Routes.Login, Login, { isPrivateRoute: false })
    .use(Routes.Registration, Register, { isPrivateRoute: false })
    .use(Routes.Profile, Profile, { isPrivateRoute: true })
    .use(Routes.EditProfile, EditProfile, { isPrivateRoute: true })
    .use(Routes.EditProfile, EditProfile, { isPrivateRoute: true })
    .use(Routes.Chat, Messenger, { isPrivateRoute: true })
    .use(Routes.Password, ChangePassword, { isPrivateRoute: true })
    .use(Routes.Server, Error500, { isPrivateRoute: false })
    .use(Routes.NotFound, Error404, { isPrivateRoute: false })
    .redirect("/");

  Router.start();
});
