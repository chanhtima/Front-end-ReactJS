import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, Link, useParams } from "react-router-dom";
import { DataUsers } from "../data/DataUsers";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");

  useEffect(() => {
    // Find the user with the matching id
    const user = DataUsers.find((user) => user.id === parseInt(id, 10));

    // Check if a user was found
    if (user) {
      // Populate the form fields with user data
      setFirst_name(user.first_name);
      setLast_name(user.last_name);
      setGender(user.gender);
      setBirthdate(user.birthdate);
      setImage(user.image);
    } else {
      // Handle the case where the user with the given id was not found
      Swal.fire("Error", "User not found.", "error");
      navigate("/"); // Redirect to the user list
    }
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!first_name || !last_name) {
      Swal.fire("Error", "Please provide both first name and last name.", "error");
      return;
    }

    // Update DataUsers with the edited user data
    const updatedDataUsers = DataUsers.map((user) => {
      if (user.id === parseInt(id, 10)) {
        return {
          ...user,
          image,
          first_name,
          last_name,
          gender,
          birthdate,
        };
      }
      return user;
    });

    DataUsers.length = 0;
    DataUsers.push(...updatedDataUsers);

    Swal.fire("User Updated!", "User has been updated successfully.", "success");
    navigate("/");
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
  };


  return (
    <div className="container py-4">
    <div className="flex justify-between items-center py-12">
        <h2 className="text-base sm:text-xl">Esit Update User</h2>
        <Link
          to="/"
          className="border-none bg-black px-4 py-1 rounded-md text-white "
        >
          Back User List
        </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center ">
            <div className="border-2 rounded-full w-40 h-40 mx-auto ">
              {image && (
                <img
                  src={image}
                  alt="Uploaded Profile"
                  className=" rounded-full w-40 h-40 object-cover "
                />
              )}
            </div>
            <div className="mt-2  rounded-lg p-2">
              <label className="btn  btn-primary mx-2">
                Upload New Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
              <button
                className="btn btn-error mt-2"
                onClick={handleImageDelete}
              >
                Delete
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-wrap items-center justify-between">
            <div className="w-full sm:w-1/2  p-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First name</span>
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="input input-bordered bg-slate-50"
                  onChange={(e) => setFirst_name(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 form-control p-2">
              <label>Last name</label>
              <input
                type="text"
                placeholder="Last name"
                className="input input-bordered bg-slate-50 mt-2"
                onChange={(e) => setLast_name(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-1/2 form-control p-2">
              <label>Gender</label>
              <select
                className="select select-bordered bg-slate-50"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">-- Please select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="w-full sm:w-1/2 form-control p-2">
              <label>Birthday</label>
              <input
                type="date"
                className="input input-bordered bg-slate-50 mt-2"
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <div className="w-full text-end mt-4 ">
              
              <button
                type="submit"
                className="btn bg-green-500 border-none px-8 hover:bg-green-900  text-white "
              >
                update
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditUser;
