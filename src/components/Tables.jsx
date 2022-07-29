import React,{ 
    // useState 
} from 'react'

const Tables = (props) => {
    // const [dogList, setDogList] = useState(123)
    return (
    <>
    <table className='table table-striped'>
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
            {/* {dogList &&
              dogList.map((dog, index) => ( */}
                <>
                  <tr>
                    <td>{props.Name}</td>
                    <td>{props.Age}</td>
                    <td>{props.createdAt}</td>
                    <td>{props.ServiceType}</td>
                    <td>
                        <input
                            type="checkbox"
                            name="Checkout"
                            id="out"
                            value={props.Name}
                        />
                    </td>
                  </tr>
                  <tr key={123}>
                    <td>Shera</td>
                    <td>2</td>
                    <td>12.13</td>
                    <td>Bath</td>
                    <td>
                        <input
                            type="checkbox"
                            name="Checkout"
                            id="out"
                            // value={dog.Name}
                            // onChange={()=> setMark(false)}
                            // onClick={()=> checkOutPup(dog.Name)}
                        />
                    </td>
                  </tr>
                  <tr key={123}>
                    <td>Shera</td>
                    <td>2</td>
                    <td>12.13</td>
                    <td>Bath</td>
                    <td>
                        <input
                            type="checkbox"
                            name="Checkout"
                            id="out"
                            value={props.Name}
                            // onChange={()=> setMark(false)}
                            // onClick={()=> checkOutPup(props.Name)}
                        />
                    </td>
                  </tr>                                    
                </>
              {/* ))} */}
          </tbody>
    </table>    
    </>
  )
}

export default Tables