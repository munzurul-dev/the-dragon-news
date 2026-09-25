import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";

const Resgister = () => {
  const { creatUser, setUser, user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [navigate, user]);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    //const checkbox = e.target.checkbox.value;
    //console.log(name, photo, email, password, checkbox);
    setPasswordError("");
    setNameError("");
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return;
    }
    if (name.length < 5) {
      setNameError("Name must be at least 5 characters long.");
      return;
    }
    creatUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch(() => {
            //console.log(error.message);
            setUser(user);
          });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        //const errorMessage = error.message;
        //alert(errorMessage)
        //console.log(errorCode)

        setError(errorCode);
      });
  };

  if (user) {
    return <Loading></Loading>;
  }
  return (
    <div className="card bg-base-100 w-full max-w-md  shrink-0 shadow-2xl">
      {" "}
      <h2 className="text-2xl font-bold text-center mt-4">
        Register your account
      </h2>
      <form onSubmit={handleRegister} className="card-body">
        <p className="border-b border-gray-500 mt-5 mb-5"></p>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            className="input w-full outline-0"
            placeholder="Name"
            name="name"
            required
          />
          {nameError ? (
            <p className="text-secondary text-center">{nameError}</p>
          ) : (
            ""
          )}
          <label className="label">Photo Url</label>
          <input
            type="text"
            className="input w-full outline-0"
            placeholder="Photo Url"
            name="photo"
            required
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input w-full outline-0"
            placeholder="Email"
            name="email"
            required
          />
          <label className="label w-full">Password</label>
          <input
            type="password"
            className="input w-full outline-0"
            placeholder="Password"
            name="password"
            required
          />

          <div className="flex items-center gap-2 text-secondary mt-2">
            <input
              className="cursor-pointer"
              required
              type="checkbox"
              name="checkbox"
              id=""
            />{" "}
            <p>Accept Term & Conditions</p>
          </div>
          {error ? <p className="text-secondary text-center">{error}</p> : ""}
          {passwordError ? (
            <p className="text-secondary text-center">{passwordError}</p>
          ) : (
            ""
          )}
          <button type="submit" className="btn btn-neutral mt-4 w-full">
            Register
          </button>
          <p className="font-semibold text-center mt-2 ">
            Already Have An Account ?{" "}
            <Link to="/auth/login" className="text-secondary hover:underline">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Resgister;
