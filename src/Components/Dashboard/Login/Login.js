import React, { useContext, useState } from 'react';
import avatar from '../../../images/avatar.png';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';



const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history =  useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } 
    else {
        firebase.app(); // if already initialized, use that one
      }
    
    var provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn =() => {
                firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
            var token = credential.accessToken;
            // The signed-in user info.
            const {displayName,email} = result.user;
            const signedInUser = { name: displayName, email }
            setLoggedInUser(signedInUser);
            console.log(signedInUser);
            history.replace(from);
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(errorMessage,errorCode)
  });
    }
    return (
     <div className="login">
            <div className="loginbox">
            <img src={avatar} alt="" className="avatar"/>
            <h1>Login Here</h1>
		   <form>
               <p>Username</p>
               <input type="text" name="" placeholder="Enter Username"/>
               <p>Password</p>
               <input type="password" name ="" placeholder="Enter Your Password"/>
               <input type="submit" />
               <a href="">Lost your password</a>
               <br/>
               <a href="">Dont have an account?Sign In</a>
               <br/>
               <br/><br/>
               <br/>
           </form>
           <button className='btn auth' onClick={handleSignIn}>Sign In With Google </button><br/><br/>
               <button className='btn auth1'>Sign In With Facebook</button>
        </div>
     </div>
    );
};

export default Login;