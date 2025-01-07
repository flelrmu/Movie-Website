import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button2 from "../Elements/Button/Button2";
import InputForm from "../Elements/Input/Index";
import GlobalApi from "../Services/GlobalApi";
import { UserContext } from "../context/UserContext";


function FormLogin() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    try {
      const response = await GlobalApi.loginUser(email, password); // Gunakan loginUser
      if (response.data.token) {
        const user = { email, token: response.data.token };
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/Movie-Website/home");
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      alert("Invalid email or password!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="email"
        placeholder="Username"
        name="email"
        required
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="Password"
        name="password"
        required
      />
      <div className="justify-center items-center flex">
        <Button2 variant="bg-[#e50000] px-[30px] py-[10px]" type="submit">
          Login
        </Button2>
      </div>
    </form>
  );
}

export default FormLogin;
