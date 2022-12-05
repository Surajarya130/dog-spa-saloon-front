import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const QuickView = () => {
  // Quick view parameters with useStates
  const [allPups, setAllPups] = useState("");
  const [todaysPup, setTodaysPup] = useState("");
  const [fetchCheckOut, setDetchCheckOut] = useState("");

  let fetchAllPups = () => {
    var config = {
      method: "get",
      url: "https://pup-spa.onrender.com/dogs/totalPups",
    };

    axios(config)
      .then(function (response) {
        setAllPups(response.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let fetchTodaysData = () => {
    // A date string to match with api's last value, was little tricky.
    let currDate = `${new Date().getFullYear()}-${
      new Date().getMonth() < 10
        ? `0${new Date().getMonth() + 1}`
        : new Date().getMonth() + 1
    }-${new Date().getDate()}`;
    var config = {
      method: "get",
      url: `https://pup-spa.onrender.com/dogs/datewise/${currDate}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setTodaysPup(response.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let datatToBeCheckedOut = () => {
    var config = {
      method: "get",
      url: "https://pup-spa.onrender.com/dogs/",
    };

    axios(config)
      .then(function (response) {
        setDetchCheckOut(response.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // On every effect re-rendering the values so that data are keep dynamiclly visible to dashboard
  useEffect(() => {
    fetchAllPups();
    fetchTodaysData();
    datatToBeCheckedOut();
  }, [allPups, todaysPup, fetchCheckOut]);

  return (
    <>
      <div id="quickViewContainer">
        <div className="allEmpContainer">
          <section className="page-contain">
            <Link to="/addPuppy" className="data-card">
              <h3>{allPups}</h3>
              <h4>Total reg. pups so far</h4>
              <p>{allPups} pups and counting on....</p>
              <span className="link-text">
                <span className="btn btn-light">Click To Add More</span>
              </span>
            </Link>

            <Link to="/waitinglist" className="data-card">
              <h3>{todaysPup}</h3>
              <h4>Pups reg today</h4>
              <p>We have live updating list</p>
              <span className="link-text">
                <span className="btn btn-light">Go to Waitlist</span>
              </span>
            </Link>

            <Link to="/checkout" className="data-card">
              <h3>{fetchCheckOut}</h3>
              <h4>Checkout Pending</h4>
              <p>{fetchCheckOut} pusps to checkout</p>
              <span className="link-text">
                <span className="btn btn-light">Click To CheckOut</span>
              </span>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default QuickView;
