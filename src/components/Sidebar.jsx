import React from 'react'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <>    
      <div className="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"  id="sidebar">

        <ul className="nav flex-column text-white w-100">
          <Link to="/" className="nav-link h1 text-white my-5">
            Puppy Spa
          </Link>          
            <li className="nav-link">
              <i className="bx bxs-dashboard"></i>
              <Link to='/quickview' className="mx-2 sideLink">Quick View</Link>
            </li>

            <li className="nav-link">
            <i className='bx bxs-book-add' ></i>
              <Link to='/addpuppy' className="mx-2 sideLink">Add Pup</Link>
            </li>

            <li className="nav-link">
              <i className="bx bx-user-check"></i>
              <Link to='/checkout' className="mx-2 sideLink">CheckOuts</Link>
            </li>

            <li className="nav-link">
              <i className="bx bx-list-plus"></i>
              <Link to='/waitinglist' className="mx-2 sideLink">Waiting List</Link>
            </li>

            <li className="nav-link">
            <i className='bx bx-file-find' ></i>
              <Link to='/searchbydate' className="mx-2 sideLink">Search By Date</Link>
            </li>

            <li className="nav-link">
            <i className ='bx bx-book-open' ></i>
              <Link to='/searchByName' className="mx-2 sideLink">Search By Name</Link>
            </li>

        </ul>

      </div>
    </>
  )
}

export default Sidebar