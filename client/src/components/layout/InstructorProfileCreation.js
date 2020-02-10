import React from "react";

const InstructorProfileCreation = () => {
  return (
    <div class="container">
      <h2> Create Instructor Profile </h2>
      <p>
        {" "}
        Enter your information below to make an account and get started with
        Handraze.
      </p>
      <form>
        <div class="form-group">
          <label for="department">Department</label>
          <input
            type="department"
            class="form-control"
            id="department"
            aria-describedby="emailHelp"
            placeholder="Enter your Department"
          />
        </div>
      </form>
    </div>
  );
};

export default InstructorProfileCreation;
