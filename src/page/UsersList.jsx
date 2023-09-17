import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"; // Import Swal
import { DataUsers } from "../data/DataUsers";

function UsersList() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    setUser(DataUsers);
  }, []);

  // Function to handle user deletion
  const handleDeleteUser = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
      
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUser(updatedUsers);
        Swal.fire("Deleted!", "The user has been deleted.", "success");
      }
    });
  };
  return (
    <div className="container py-4">
       <div className="flex justify-between items-center">
        <h2 className="text-base sm:text-xl">User Lsit </h2>
        <Link
          to="/creatsuser"
          className="border-none bg-primary px-4 py-1 rounded-md text-white hover:bg-blue-400"
        >
          Add +
        </Link>
      </div>

      <div className=" overflow-x-auto mt-8">
        <table className="table border text-center">
          <thead>
            <tr className="bg-slate-200">
              <th>Profile Picture</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((row) => (
              <tr key={row.id}>
                <td>
                  <img src={row.image} alt={row.first_name} className=" rounded-full w-10 h-10 mx-auto  object-cover" />
                </td>
                <td >{row.first_name} </td>
                <td>{row.last_name}</td>
                <td>{row.gender}</td>
                <td>{row.birthdate}</td>
                <td className="flex items-center  justify-center"><Link to={`/edituser/${row.id}`}  className="bg-yellow-500 p-2 rounded-lg mr-2">Edit</Link> 
                <button
                      className=" bg-red-500 p-2 rounded-lg"
                      onClick={() => handleDeleteUser(row.id)}
                    >
                      Delete
                    </button>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
