import axios from "axios";
import React, { useState } from "react";

const AddPup = () => {
  // Calling all the input and alerts message and with useState 
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [owner, setOwner] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("Male");
  const [serviceType, setServiceType] = useState("Washing");
  const [alertMsg, setAlertMsg] = useState(false)
  const [successMsg, setSuccessMsg] = useState(false)



// OnSubmit the form
  const handleSubmit = ()=>{

    // Basic form validation
    if(name.length > 3 && address.length >3 && owner.length > 3 && age>=1) {
      
      console.log("Form Validated")
      
      var data = JSON.stringify({
        "Name": name,
        "Age": age,
        "Gender": gender,
        "Owner": owner,
        "Address": address,
        "ServiceType": serviceType
      });
      
      var config = {
        method: 'post',
        url: 'https://doggysalonappbackend.herokuapp.com/dogs/addPuppy',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      // After successfull post clearing all useStates for the next Puppy
      axios(config)
      .then(function (response) {
        setSuccessMsg(true)
        setName('')
        setAge('')
        setOwner('')
        setAddress('')
        setTimeout(() => {
        setSuccessMsg(false)
        }, 3000);

      })
      .catch( (error)  => {
        console.log("Error");
        console.log(error)
      }); 
      
    } else {
      setAlertMsg(true)
      setTimeout(() => {
        setAlertMsg(false)
      }, 2000);
      
    }

  }

  


  return (
    <> 
      <h1 className="text-center mb-3">Add Puppys to Spa</h1>
      <div className="formArea">
        {
          // Success meesage condition with useState
          successMsg ? 
          <div className="alert alert-success" role="alert">
          New Pup Has been added!
          </div> : ''

        }

        {
        alertMsg ? <p style={{color:"red"}}>Please fill all the details</p> : ''
        }              
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Age"
            required
            value={age}
            onChange={(e)=>setAge(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Owner Name"
            required
            value={owner}
            onChange={(e)=>setOwner(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Address"
            required
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
          />
        </div>
        <div className="select-dropdown mb-3">
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="select-dropdown mb-3">
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option value="Washing">Washing</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Bathing">Bathing</option>
          </select>
        </div>
        <button type="submit" className="btn btn-dark w-100" onClick={handleSubmit}>
          Submit
        </button>
        <br />

      </div>
    </>
  );
};

export default AddPup;
