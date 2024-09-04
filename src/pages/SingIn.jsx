import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingIn = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [passowrd, setpassowrd] = useState("");
  const handlsubmit = (event) => {
    event.preventDefault();
    if (email === "miam6829@gmail.com" && passowrd === "12345678") {
      const user = {
        name: "mohammad mamun",
        email: "miam6829@gmail.com",
        city: "mymesingh",
        country: "bangladesh",
      };
      localStorage.setItem(
        "userData",
        JSON.stringify({ user, isLoggedIn: true })
      );
      navigate("/dashboard/user/profile", { state: user });
    } else {
      toast.error("email and password  is incorrect ");
    }
    setemail("");
    setpassowrd("");
  };
  const handleemailchange = (event) => {
    setemail(event.target.value);
  };
  const handlepasswordchange = (event) => {
    setpassowrd(event.target.value);
  };
  return (
    <div className="sigin-container">
      <h2>User Sign In </h2>
      <form onSubmit={handlsubmit} className="sigin-form">
        <input
          type="email"
          onChange={handleemailchange}
          name="email"
          id="email"
          placeholder="Email"
          value={email}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlepasswordchange}
          placeholder="password"
          value={passowrd}
        />
        <button>SigIn</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SingIn;
