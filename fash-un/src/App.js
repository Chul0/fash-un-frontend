import './App.css';
import { Route, Redirect } from 'react-router-dom'
import { useState, useContext } from 'react'
import { UserContext } from './contexts/UserContext'


import NavBar from './components/NavBar'
import Home from './pages/Home'
import BrandContents from './pages/BrandContents'
import Brands from './pages/Brands'
import Login from './pages/Login'
import MyBoard from './pages/MyBoard'
import Profile from './pages/Profile'
import Signup from './pages/Signup'


function App(props) {
  const [user, setUser] = useContext(UserContext)
  // console.log(process.env.REACT_APP_BACKEND_URL); server testing
 
  return (
    <div className="App">
      <NavBar />

      <Route 
       path="/"
       exact
       render={()=>{
         return <Home />
       }}
      />

      <Route 
       path="/signup"
       render={()=>{
        if(user.id){
          return <Redirect to ="/brand" />
        } else {
         return <Signup />
        }
       }}
      />

      <Route 
       path="/login"
       render={()=>{
         if(user.id){
          return <Redirect to ="/brand" />
         } else{
          return <Login />
         }
       }}
      />

      <Route 
       path="/brand"
       render={()=>{
         return <Brands />
       }}
      />

      <Route 
       path="/myboard"
       render={()=>{
         return <MyBoard />
       }}
      />

      <Route 
       path="/profile"
       render={()=>{
         return <Profile />
       }}
      />




    </div>
  );
}

export default App;
