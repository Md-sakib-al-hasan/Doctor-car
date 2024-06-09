import React, { useContext } from "react";
import img from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import AuthProviders, { Authcontext } from "../../Provider/AuthProviders";
export default function Login() {
  const { signIn } = useContext(Authcontext);

  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <div className="text-center lg:text-left w-1/2">
          <img className="mr-12" src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="login"
              ></input>
            </div>
          </form>
          <p className="text-center">
            New to Car Doctors{" "}
            <Link className=" text-orange-600" to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
