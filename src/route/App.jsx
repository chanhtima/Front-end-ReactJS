import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../layout/_header/Header";
import UsersList from "../page/UsersList";
import CreatsUser from "../page/CreatsUser";
import EditUser from "../page/EditUser";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/creatsuser" element={<CreatsUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
