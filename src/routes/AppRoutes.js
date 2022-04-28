import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "../components/homePage/header/header";
import HomePage from "../components/homePage/homePage";
import SignIn from "../components/viewForm/login/login";
import UserProfile from "../components/viewForm/profile/userProfile";
import SignUp from "../components/viewForm/register/registerUser";
import { selectUser } from "../store/userSlice";

function AppRoute() {
    const user = useSelector(selectUser)
    console.log(user)
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
  
            <Route path="/registro" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            {/* <Route path="/" element={<NavBar />} /> */}
            {user?
              <Route path="/profile" element={<UserProfile/>} /> 
              :
              <Route path="/login" element={<SignIn />} />
            }
          </Routes>
      </BrowserRouter>
    );
  }
  
  export default AppRoute;

