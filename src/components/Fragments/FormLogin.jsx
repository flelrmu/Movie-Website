import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button2 from "../Elements/Button/Button2";
import InputForm from "../Elements/Input/Index";
import GlobalApi from "../Services/GlobalApi";
import { UserContext } from "../context/UserContext";
import { ClipLoader } from "react-spinners"; // Import spinner

function FormLogin() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login
  const [isLoading, setIsLoading] = useState(false); // State untuk tombol loading

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setIsLoading(true); // Tampilkan loading spinner

    try {
      const response = await GlobalApi.loginUser(email, password);
      if (response.data.token) {
        const user = { email, token: response.data.token };
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoggedIn(true); // Tandai user berhasil login
        navigate("/Movie-Website/home");
      } else {
        alert("Login failed!");
      }
    } catch (error) {
      alert("Invalid email or password!");
    } finally {
      setIsLoading(false); // Sembunyikan loading spinner
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
        <Button2
          variant={`bg-[#e50000] px-[30px] py-[10px] ${
            isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={isLoggedIn || isLoading} // Disabled jika login berhasil atau sedang loading
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={20} /> // Spinner saat loading
          ) : (
            "Login"
          )}
        </Button2>
      </div>
    </form>
  );
}

export default FormLogin;
