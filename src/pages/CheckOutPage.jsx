import React, { useState, useEffect } from "react";
import axios from "axios";

const CheckOutPage = () => {
  const [dogList, setDogList] = useState();
  // const [mark, setMark] = useState(false);

  const checkOutPup = (pupName) => {
    axios({
      method: "patch",
      url: `https://doggysalonappbackend.herokuapp.com/dogs/checkout/${pupName}`,
    })
      .then((res) => {
        let result = res.data;
        console.log(result);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  let allDogs = () => {
    axios({
      method: "GET",
      url: "https://doggysalonappbackend.herokuapp.com/dogs/",
    })
      .then((res) => {
        let result = res.data;
        setDogList(result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    allDogs();

  }, [dogList]);

  return (
    <>
      <h2 className="mb-3">CheckOut Page</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Age</th>
            <th>In Time</th>
            <th>Service Type</th>
            <th>Checkout</th>
          </tr>
        </thead>
        <tbody>
          {dogList &&
            dogList.map((dog, index) => (
              <>
                <tr key={index}>
                  <td>{dog.Name}</td>
                  <td>{dog.Owner}</td>
                  <td>{dog.Age}</td>
                  <td>{dog.createdAt}</td>
                  <td>{dog.ServiceType}</td>
                  <td>
                    <input
                      type="checkbox"
                      name="Checkout"
                      id="out"
                      value={dog.Name}
                      onClick={() => checkOutPup(dog.Name)}
                    />
                  </td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CheckOutPage;
