import Top from "@/facebook/Top";
import TopLeft from "@/facebook/TopLeft";
import LayOut from "@/facebook/layout";
import { useState } from "react";

export default function home() {
  const [userData, setUserData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleLogin = () => {
    console.log(userData);
  };

  return (
    <div id="container">
      <Top>
        <div className="topLeftOut">
          <TopLeft
            text="facebook"
            txtColor="rgba(26,119,242,255)"
            fontSize="60px"
            fontWeight={700}
          />
          <TopLeft
            text="Connect with friends and the world around you on Facebook."
            fontSize="26px"
          />
        </div>
        {/* 
        <div className="w-200 h-75 bg-red-400 border-collapse">
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="w-110% h-100% bg-red-500" onClick={handleLogin}>
            Login
          </button>
        </div> */}

        <LayOut>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="w-110% h-100% bg-red-500" onClick={handleLogin}>
            Login
          </button>
        </LayOut>
      </Top>
    </div>
  );
}
