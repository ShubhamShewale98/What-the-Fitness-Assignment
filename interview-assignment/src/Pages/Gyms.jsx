import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { MdLocationPin } from "react-icons/md";

const Gyms = () => {
  return (
<div>
    <div style={{ backgroundColor: "black" , padding:"1%" }}>
      <div
        style={{
          marginTop: "10%",
          margin: "auto",
          width: "80%",
          height: "50px",
          border: "1px solid white",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" , marginTop:"0.5%" }}>
          <div style={{ marginTop: "1%", fontWeight: "800" }}>
            <IconContext.Provider value={{ color: "white" }}>
              <AiOutlineSearch />
            </IconContext.Provider>
            <input
              type="text"
              placeholder="Serach gym name here..."
              style={{
                backgroundColor: "transparent",
                border: " 0px solid",
                height: "20px",
                width: "160px",
                color: "#CCC",
              }}
            />
          </div>
          <div style={{ display: "flex" , gap:"10%", justifyContent:"flex-end"}}>
            <div style={{ backgroundColor: "#920909" , height:"40px", width:"40px"  , margin:"auto" , borderRadius:"25%"}}>
              {" "}
              <IconContext.Provider value={{ color: "white"  , size:"25px"  }}>
                <MdLocationPin style={{margin:"10%"}}/>
              </IconContext.Provider>
            </div> 
            <button style={{ backgroundColor: "#920909" , height:"30px", width:"150px"  , margin:"auto" , borderRadius:"25%" , marginRight:"1%"}}> Clear</button>
          </div>
        </div>
      </div>
    </div>
    <div style={{display:"grid" , gridTemplateColumns:"30% 70%"}}>
        <div>1</div>
        <div>1</div>
    </div>
    </div>
  );
};

export default Gyms;
