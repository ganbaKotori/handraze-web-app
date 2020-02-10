import React from "react";

const InstructorPage = () => {
  return (
    <div class="container">
    <div class="row ">
        <div class="col-12 col-md-8">
        <div class="row col-md-8">
        <h3>Instructor Profile <a href="#" class="btn btn-primary">EDIT</a></h3>
        </div>
            <div class="row prof-profile">
                
                <div class="col-2">
                    <img src="https://via.placeholder.com/100" class="profpic" />
                </div>
                <div class="col-6">
                    <h2>Carl D. Mellas</h2>
                    <p> California State University, Long Beach</p>
                    <p> Tenure</p>

                </div>
            </div>

            <div class="car">
                <h3>Courses</h3>
                <div class="courses">
                <div class="row">
                    <div class="col-sm-5">
                        <div class="card bg-success">
                            <div class="card-body">
                                <h5 class="card-title">Political Science 101</h5>
                                <p class="card-text">MW 7:30AM to 11:00AM</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <div class="card bg-danger">
                            <div class="card-body">
                                <h5 class="card-title">Advanced Basket Weaving</h5>
                                <p class="card-text">TTH 7:30AM to 11:00AM</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5">
                        <div class="card">
                            <div class="card-body bg-primary">
                                <h5 class="card-title">Database Fundamentals</h5>
                                <p class="card-text">MW 7:30AM to 11:00AM</p>
                            </div>
                        </div>
                    </div>
                    

                </div>
                
                </div>
            </div>
        </div>
        <div class="col-6 col-md-4">
            <h3> News Feed</h3>
            <div class="newsfeed">
            <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">New Notes: Chapter 3</h5>
                    </div>
                    <p class="mb-1">Advanced Basket Weaving.</p>
                    
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">New Notes: Chapter 2</h5>
                    </div>
                    <p class="mb-1">Introduction to Political Science.</p>
                    
                </a>
                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">New Question: Chapter 1</h5>
                    </div>
                    <p class="mb-1">Advanced Basketweaving</p>
                    
                </a>
                </div>
            </div>
        </div>
    </div>

</div>
  );
};

export default InstructorPage;
