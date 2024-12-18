import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';

export default function App() {
  return ( <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" elemnt={<Home />}/>
    <Route path="/About" elemnt={<About />}/>
    <Route path="/Profile" elemnt={<Profile />}/>
    <Route path="/sign-in" elemnt={<SignIn />}/>
    <Route path="/sign-up" elemnt={<SignUp />}/>
  </Routes>
  </BrowserRouter>
    
  )
}
