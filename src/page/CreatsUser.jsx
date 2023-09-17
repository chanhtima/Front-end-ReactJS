import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate ,Link} from "react-router-dom";
import { DataUsers } from "../data/DataUsers";

function CreatsUser() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!first_name || !last_name) {
      Swal.fire(
        "Error",
        "Please provide both first name and last name.",
        "error"
      );
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({
        image: image,
        first_name: first_name,
        last_name: last_name,
        gender: gender,
        birthdate: birthdate,
      }),
      redirect: "follow",
    };

    // Assuming you want to add a new user to the DataUsers array
    const newUser = {
      id: DataUsers.length + 1,
      image: image,
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      birthdate: birthdate,
    };

    // Update DataUsers with the new user
    DataUsers.push(newUser);

    Swal.fire("User Created!", "User has been created successfully.", "success");
    navigate("/");
  };

  const [image, setImage] = useState(null);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");

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
        <h2 className="text-base sm:text-xl">Creats new User</h2>
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
                save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatsUser;
