import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import {useState,useEffect} from 'react';
import Search from './pages/Search';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  useEffect(() => {
    document.title = "LifeShare"
 }, []);
  const [user,setLoginUser] = useState({
 
  })
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}><Login setLoginUser={setLoginUser}/></Route>
      <Route path="/SignUp" component={Signup}/>
      <Route path="/Search" component={Search}/>
      <Route exact path="/Search">
            {
              user && user._id ? <Search setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
    </Switch>
    </>
  );
}

export default App;
