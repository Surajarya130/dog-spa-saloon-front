import React, { useState, 
} from "react";
import axios from "axios";

const WaitList = () => {
  const [dogList, setDogList] = useState();


  
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

  return (
    <>
      <div className="WaitContainer center">
        <h1>Waiting List</h1>
        <button className="btn btn-dark mb-3" onClick={allDogs}>Get List</button>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Wait No</th>
              <th>Name</th>
              <th>Owner</th>
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
                    <td>{index+1}</td>
                    <td>{dog.Name}</td>
                    <td>{dog.Owner}</td>
                    <td>{dog.Age}</td>
                    <td>{dog.createdAt}</td>
                    <td>{dog.ServiceType}</td>
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
