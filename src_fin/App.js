import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import { Route } from 'react-router-dom';


function App() {
  const user = true;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/register"element = {user ? <Home/> :<Register/>}/>
        <Route path="/login" element = {user ? <Home/> :<Login/>} />
        <Route path="/write" element  ={user ? <Write/> :<Register/>}/>
        <Route path="/settings" element = {user ? <Settings/> :<Register/>} />
        <Route path="/post/:postId" element = {<Single/>} />
      </Routes>
    </Router>
  );
}

export default App;


// we can only return a single div in react to for return =ning multiple components we should enclode them inside a div

