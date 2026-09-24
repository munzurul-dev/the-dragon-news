import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);
  const handleLogin = (e)=>{
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email,password)
     
    signIn(email,password) .then((result) => {
    const user = result.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode,errorMessage)
  });

  }
  return (
    <div className="card bg-base-100 w-full max-w-md  shrink-0 shadow-2xl">
          <h2 className="text-2xl font-bold text-center mt-4">Login your account</h2>
      <form onSubmit={handleLogin} className="card-body">
        <p className="border-b border-gray-500 mt-5 mb-5"></p>
        <fieldset className="fieldset">
          <label className="label">Email</label>
         {/* Email */}
          <input name="email" required  type="email" className="input w-full outline-0" placeholder="Email" />
         
          <label  className="label w-full">Password</label>
           {/* Password */}
          <input name="password" required type="password" className="input w-full outline-0" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4 w-full">Login</button>
          <p className="font-semibold text-center mt-2 ">Dont’t Have An Account ? <Link  to="/auth/register" className="text-secondary hover:underline">Register</Link></p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
