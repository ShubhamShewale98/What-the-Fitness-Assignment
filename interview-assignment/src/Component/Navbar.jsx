import React from "react";
import { Link, Navigate } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "20% 80%",
          height:"100px",
          backgroundColor:"#0d0d0d",
         
        }}
      >
        <div>
          {" "}
          <img
            width={"80px"}
            style={{color:"white"}}
            src="https://play-lh.googleusercontent.com/c71_mHD_9eJm0u898BfRfWsUiEzKg7p0qnLlOmgpeWAptEiwjYMhgl6zZWzhpSE_rmI=w240-h480-rw"
          ></img>
        </div>

        <div
          style={{
            display: "flex",
            gap: "3%",
            justifyContent: "end",
            padding:"2%"
          }}
        >
          {" "}
          <Link style={{textDecoration:"none",color:"white"}} to="">Nutrition</Link>
          <Link style={{textDecoration:"none",color:"white"}} to="">Gyms</Link>
          <Link style={{textDecoration:"none",color:"white"}} to="">Become WTF Partner</Link>
          <Link style={{textDecoration:"none",color:"white"}} to="">About Us</Link>
          <Link style={{textDecoration:"none",color:"white"}}>Login</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
