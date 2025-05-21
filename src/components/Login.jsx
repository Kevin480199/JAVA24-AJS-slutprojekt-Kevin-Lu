
import { auth } from "../js/FireBaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";

export function Login({ onLogin }) {
  let tempEmail = '';
  let tempPassword = '';
  const [login, setLogin] = useState(false)

  function handleLogin(event) {
    event.preventDefault();
    if(login){
        signOut(auth)
        setLogin(false)
    } else {
        console.log(tempEmail)
        signInWithEmailAndPassword(auth, tempEmail, tempPassword)
        .then(userCred => {
            const user = userCred.user;
            onLogin(user); // Call a prop to set user in App
            setLogin(true);
            event.target.reset();
        })
        .catch(err => alert("Login failed: " + err.message));
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="Email" type="email" onChange={event => tempEmail = event.target.value} />
      <input placeholder="Password" type="password" onChange={event => tempPassword = event.target.value} />
      <button>{login?'Log out':'Log in'}</button>
    </form>
  );
}