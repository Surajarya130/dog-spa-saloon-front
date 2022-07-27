import React, { useState } from "react";
import axios from "axios";

const WaitList = () => {
  const [dogList, setDogList] = useState();

  let allDogs = () => {
    axios({
      method: "GET",
      url: "http://localhost:3000/dogs",
    })
      .then((res) => {
        let result = res.data;
        setDogList(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="WaitContainer">
        <h1>Waiting List</h1>
        <button onClick={allDogs}>Get List</button>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>In Time</th>
              <th>Service Type</th>
            </tr>
          </thead>
          <tbody>
            {dogList &&
              dogList.map((dog, index) => (
                <>
                  <tr key={index}>
                    <td>{dog.Name}</td>
                    <td>{dog.Age}</td>
                    <td>{dog.createdAt}</td>
                    <td>{dog.ServiceType}</td>
                    <td>
                      {dog.OutStatus ? (
                        <input
                          type="checkbox"
                          name="Checkout"
                          id="out"
                          value={dog.Name}
                        />
                      ) : (
                        <input
                          type="checkbox"
                          name="Checkout"
                          id="out"
                          value={dog.Name}
                        />
                      )}
                    </td>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WaitList;
