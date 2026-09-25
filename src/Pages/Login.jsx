import { useContext, useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router";

import { AuthContext } from "../Provider/AuthProvider";

import Loading from "../Components/Loading";

const Login = () => {
  const { signIn, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const from = e.target;

    const email = from.email.value;
    const password = from.password.value;

    //console.log(email, password);

    signIn(email, password)
      .then(() => {
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;

        setError(errorCode);
      });
  };

  if (user) {
    return <Loading />;
  }

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 flex justify-center">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl">
        <h2 className="text-xl sm:text-2xl font-bold text-center mt-5 sm:mt-6 px-4">
          Login your account
        </h2>

        <form onSubmit={handleLogin} className="card-body p-5 sm:p-6 md:p-8">
          <p className="border-b border-gray-500 mt-2 mb-4"></p>

          <fieldset className="fieldset">
            <label className="label text-sm sm:text-base">Email</label>

            <input
              name="email"
              required
              type="email"
              className="input w-full outline-0"
              placeholder="Email"
            />

            <label className="label text-sm sm:text-base mt-2">Password</label>

            <input
              name="password"
              required
              type="password"
              className="input w-full outline-0"
              placeholder="Password"
            />

            <div className="mt-2">
              <a className="link link-hover text-sm sm:text-base">
                Forgot password?
              </a>
            </div>

            {error && (
              <p className="text-secondary text-center text-sm mt-2 wrap-break-word">
                {error}
              </p>
            )}

            <button type="submit" className="btn btn-neutral mt-4 w-full">
              Login
            </button>

            <p className="font-semibold text-center text-sm sm:text-base mt-3 leading-relaxed">
              Don't Have An Account?{" "}
              <Link
                to="/auth/register"
                className="text-secondary hover:underline"
              >
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
