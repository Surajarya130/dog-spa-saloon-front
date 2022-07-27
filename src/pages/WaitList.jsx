import React, { useState, useEffect } from "react";
import axios from "axios";

const WaitList = () => {
  const [dogList, setDogList] = useState();
  
  const checkOutPup = (pupName)=>{
    axios({
      method: 'patch',
      url: `http://localhost:3000/dogs/checkout/${pupName}`,      
    }).then((res) =>{
      let result = res.data;
      console.log(result)
    }).catch(err => console.log(err))
  }  

  useEffect(() => {
    console.log("Render")
  }, [dogList])
  



  
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
        <h1>Datewise List</h1>
        <button onClick={allDogs}>Get List</button>

        <table>
          <thead>
            <tr>
              <th>Name</th>
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
                    <td>{dog.Age}</td>
                    <td>{dog.createdAt}</td>
                    <td>{dog.ServiceType}</td>
                    <td>
                        <input
                          type="checkbox"
                          name="Checkout"
                          id="out"
                          value={dog.Name}
                          onClick={()=> checkOutPup(dog.Name)}
                        />
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
