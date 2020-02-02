import React from "react";

const Login = () => {
  return (
    <div class="container">
        <h2> Welcome back</h2>
        <p> Enter your account information below to sign into your profile.</p>
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>       
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password"/>
            </div>
            
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="tosCheck"/>
                <label class="form-check-label" for="tosCheck">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
  );
};

export default Login;
