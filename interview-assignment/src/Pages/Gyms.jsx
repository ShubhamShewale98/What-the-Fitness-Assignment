import React, { useEffect, useState } from "react";
import styles from "../Style/Gym.module.css";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { MdLocationPin } from "react-icons/md";
import Card from "../Component/Card";

const Gyms = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
// console.log(data)
  const getData = async () => {
    try {
      setLoading(true);
      setError(false);

      let res = await axios.get(
        "https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231"
      );
      setLoading(false);
      setData(res.data.data);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };
  const getPlace = async () => {
    try {
      setLoading(true);
      setError(false);

      let res = await axios.get("https://devapi.wtfup.me/gym/places");
      setLoading(false);
      setData(res.data.data[0].addressComponent);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  };
  const citiesHandler = (e) => {
    getPlace();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <div className={styles.inputContainer}>
        <div>
          <div>
            <div>
              <IconContext.Provider value={{ color: "white" }}>
                <AiOutlineSearch />
              </IconContext.Provider>
              <input type="text" placeholder="Serach gym name here..." />
            </div>
            <div>
              <div style={{}}>
                {" "}
                <IconContext.Provider value={{ color: "white", size: "25px" }}>
                  <MdLocationPin style={{ margin: "10%" }} />
                </IconContext.Provider>
              </div>
              <button style={{}}> Clear</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
        <div className={styles.LeftSide}>
          <p>Filter</p>
          <p>Location</p>
          <div>
            {" "}
            <IconContext.Provider value={{ color: "white" }}>
              <AiOutlineSearch />
            </IconContext.Provider>
            <input type="text" placeholder="Enter Location here..." />
          </div>
          <p>price</p>
          <div className={styles.price}>
            {" "}
            <input type="text" placeholder="Min" />
            <input type="text" placeholder="Max" />
          </div>

          <p>Cities </p>
          <select
            name=""
            id=""
            onChange={(e) => {
              citiesHandler(e);
            }}
          >
            <option value="">Select Cities</option>
            <option value="Noida">Noida</option>
          </select>
        </div>
        {loading && <div>loading</div>}
        {error && <div>something went wrong</div>}
        {data.length > 0 && (
          <div
            style={{
              backgroundColor: "black",
              marginTop: "0%",
              maxHeight: "500px",
              overflow: "auto",
            }}
          >
            {data.map((ele) => {
              return <Card ele={ele} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gyms;
