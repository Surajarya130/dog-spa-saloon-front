// Use moment package for date formatting.
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
const SearchByDate = () => {
  const [fetchedPups, setFetchedPups] = useState("");
  const [value, setValue] = useState("YYYY-MM-DD");
  useEffect(() => {
    var config = {
      method: "get",
      url: `https://pup-spa.onrender.com/dogs/datewise/${value}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setFetchedPups(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [value]);

  return (
    <>
      <h1 className="text-center mb-3">Search By Date</h1>
      <div>
        <input
          type="date"
          value={value}
          onChange={(e) =>
            setValue(moment(new Date(e.target.value)).format("YYYY-MM-DD"))
          }
        />
      </div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Age</th>
            <th>Service Type</th>
          </tr>
        </thead>
        {fetchedPups.length > 0 ? (
          fetchedPups.map((data) => (
            <tbody>
              <tr>
                <td>{data.Name}</td>
                <td>{data.Owner}</td>
                <td>{data.Age}</td>
                <td>{data.ServiceType}</td>
              </tr>
            </tbody>
          ))
        ) : value === "YYYY-MM-DD" ? (
          <p>Select the date please</p>
        ) : (
          `No Data Found on ${value}`
        )}
      </table>
    </>
  );
};

export default SearchByDate;
