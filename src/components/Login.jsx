
import { auth } from "../js/FireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCred => {
        const user = userCred.user;
        onLogin(user); // Call a prop to set user in App
      })
      .catch(err => alert("Login failed: " + err.message));
  }

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="Email" type="email" onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
}