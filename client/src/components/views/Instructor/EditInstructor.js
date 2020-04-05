import React from "react";

const EditIntructor = () => {
  return (
    <div class="container">
      <h2> Edit Instructor Profile </h2>
      <p>
        {" "}
        Enter updated information below to make a change to your account.
      </p>
      <form>

        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="email">Phone Number</label>
          <input==
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter Phone"
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            placeholder="Password"
          />
        </div>

        ========

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditIntructor;
