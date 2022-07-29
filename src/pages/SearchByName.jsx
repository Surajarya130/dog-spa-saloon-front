import React, {useState} from 'react'
import axios from 'axios'

const SearchByName = () => {
    const [searchName, setSearchName] = useState('')
    const [searchResult, setSearchResult] = useState('')
    const [alertMsg, setAlertMsg] = useState(false)
    const handleSearchByName = ()=>{
        var config = {
            method: 'get',
            url: `https://doggysalonappbackend.herokuapp.com/dogs/${searchName}`,
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            if(response.data.length > 0){
                setSearchResult(response.data)
            }else{
                console.log("No Data found")
                setAlertMsg(true)
                setTimeout(() => {
                    setAlertMsg(false)
                }, 2000);
            }
          })
          .catch(function (error) {
            console.log(error);
          });                  
    }
    

  return (
    <>
        <h1 className="text-center mb-3">Search By Pup Name</h1>    
        <div className="input-group">
        <div className="form-outline">
            <input type="search" id="form1" value={searchName} className="form-control" placeholder='Your pup name..' onChange={(e)=> setSearchName(e.target.value)} />
        </div>
        <button type="button" className="btn btn-dark" onClick={handleSearchByName}>
            <i className="fas fa-search"></i>
        </button>
        </div>
        {
            alertMsg && <p className='text-danger text-center mt-2'>No Data Found with name {searchName}</p>
        }

        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Owner</th>
                    <th>Age</th>
                    <th>Service Type</th>
                </tr>
            </thead>
            <tbody>
            {

                searchResult && searchResult.map((pup)=>{
                    return (
                        <>
                        <tr>
                            <td>{pup.Name}</td>
                            <td>{pup.Owner}</td>
                            <td>{pup.Age}</td>
                            <td>{pup.ServiceType}</td>
                        </tr>
                        </>
                    )
                })
            }

            </tbody>
        </table>



    </>
  )
}

export default SearchByName


