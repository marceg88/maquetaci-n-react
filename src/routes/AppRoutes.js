import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "../components/homePage/header/header";
import HomePage from "../components/homePage/homePage";
import SignIn from "../components/viewForm/login/login";
import SignUp from "../components/viewForm/register/registerUser";

function AppRoute() {
    return (
      <BrowserRouter>
        <header>
          <NavBar/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
  
            <Route path="/registro" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            {/* <Route path="/" element={<NavBar />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
  
  export default AppRoute;

