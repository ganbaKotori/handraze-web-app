import React from "react";
import { Link } from "react-router-dom";

import student from "../../img/student.jpg";
import instructor from "../../img/instructor.jpg";

const ProfileCreation = () => {
  return (
    <div class="container">
      <h2> Create a Profile </h2>
      <p> Choose a profile to create that best suits you.</p>
      <div class="row">
        <div class="column">
          <Link to="/">
            <div class="card">
              <img src={student} alt="student" />
              <div class="card-container">
                <h4>
                  <b>Create Student Profile</b>
                </h4>
              </div>
            </div>
          </Link>
        </div>
        <div class="column">
          <Link to="/createinstructor">
            <div class="card">
              <img src={instructor} alt="student" />
              <div class="card-container">
                <h4>
                  <b>Create Instructor Profile</b>
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
