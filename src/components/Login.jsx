// Login.jsx - Will render a form to submit a login
import { auth } from "../js/fireBaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export function Login({ onLogin, user }) {
  let tempEmail = '';
  let tempPassword = '';

  function handleLogin(event) {
    event.preventDefault();
    if(user){
        signOut(auth)
        onLogin(null) // Set user to null when siged off
    } else {
        console.log(tempEmail)
        signInWithEmailAndPassword(auth, tempEmail, tempPassword) // Signs in a user with email and password. Then returns a promise
        .then(userCred => {
            const user = userCred.user;
            onLogin(user); // Call a prop to set user in App
            event.target.reset();
        })
        .catch(err => alert("Login failed: " + err.message));
    }
  }

  return (
    <form onSubmit={handleLogin} className="d-flex align-items-center gap-2">
        <div className="form-floating mb-3">
            <input disabled={!!user} onChange={event => tempEmail = event.target.value} type="email" className="form-control" id="floatingInput" placeholder="Name"/>
            <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
            <input disabled={!!user} onChange={event => tempPassword = event.target.value} type="password" className="form-control" id="floatingInput" placeholder="Name"/>
            <label htmlFor="floatingInput">Password</label>
        </div>
      <button className="btn btn-primary">{user?'Log out':'Log in'}</button>
    </form>
  );
}