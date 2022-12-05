import React, { useState, useEffect } from "react";
import axios from "axios";

const LiveSearch = () => {
  const [query, setQuery] = useState("");
  const [fetchedData, setfetchedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios({
        method: "GET",
        url: `https://pup-spa.onrender.com/dogs/livesearch/${query}`,
      })
        .then((foundData) => {
          console.log(foundData.data);
          setfetchedData(foundData.data);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [query]);

  console.log(fetchedData);

  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder={"Search Character"}
          className={"input"}
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Age</th>
            <th>Service Type</th>
          </tr>
        </thead>
        <tbody>
          {fetchedData.length > 0 ? (
            fetchedData.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.Name}</td>
                    <td>{item.Owner}</td>
                    <td>{item.Age}</td>
                    <td>{item.ServiceType}</td>
                  </tr>
                </>
              );
            })
          ) : (
            <p>Search your pup</p>
          )}
        </tbody>
      </table>
    </>
  );
};

export default LiveSearch;
