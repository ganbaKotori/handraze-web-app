import React from "react";

const CourseDashboard = () => {
  return (
    <div class="container">
    <div class="row dashboard">
        <div class="col tr">
        <div class="card">
                <div class="card-header bg-success">
                <h5 class="">Introduction to Political Science</h5>
                <h5 >MW 9:00am-12:00am</h5>
                </div>
                
                <div class="card-footer text-muted">
                </div>
                </div>
        </div>
        <div class="col tl">
        <h4>Lectures</h4>
        <div class="row">
            <div class="col">
                <img src="https://via.placeholder.com/50" class="img-thumbnail lectures " />
            </div>
            <div class="col">
                <img src="https://via.placeholder.com/50" class="lectures img-thumbnail" />
            </div>
            <div class="w-100"></div>
            <div class="col">
                <img src="https://via.placeholder.com/50" class="lectures img-thumbnail" />
            </div>
            <div class="col">
                <img src="https://via.placeholder.com/50" class="lectures img-thumbnail" />
            </div>
        </div>
        </div>
        <div class="w-100"></div>

        <div class="col br">
        <h3>Activity Board</h3>
        <div class="newsfeed">
                    <div class="list-group activity-board">
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Lecture 10/27/19</h5>
                            </div>
                            <p class="mb-1">6 Questions</p>
                            <p class="mb-1">6 Solved</p>

                            
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Lecture 11/27/19</h5>
                            </div>
                            <p class="mb-1">5 Questions</p>
                            <p class="mb-1">3 Solved</p>                            
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Lecture 10/12/19</h5>
                            </div>
                            <p class="mb-1">6 Questions</p>
                            <p class="mb-1">2 Solved</p>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Lecture 1/27/19</h5>
                            </div>
                            <p class="mb-1">6 Questions</p>
                            <p class="mb-1">2 Solved</p>     
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Lecture 9/27/19</h5>
                            </div>
                            <p class="mb-1">7 Questions</p>
                            <p class="mb-1">4 Solved</p>      
                        </a>
                    </div>
                    <a href="#" class="btn btn-danger btn-lg btn-block btn-margin">Ask Question</a>
                </div>
        </div>
        <div class="col bl">
        <h3>Peer Notes</h3>
        <div class="newsfeed">
                    <div class="list-group notes-board">
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Chapter 4 Notes</h5>
                            </div>
                            <p class="mb-1">Diego Gonzalez</p>
                            
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Chapter 4 Notes</h5>
                            </div>
                            <p class="mb-1">Matt Pfiefer</p>
                            
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Chapter 4 Notes</h5>
                            </div>
                            <p class="mb-1">Joe Furt</p>      
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Chapter 4 Notes</h5>
                            </div>
                            <p class="mb-1">Sarah Poster</p>      
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">Chapter 4 Notes</h5>
                            </div>
                            <p class="mb-1">Diego Gonzalez</p>      
                        </a>
                    </div>
                    <a href="#" class="btn btn-danger btn-lg btn-block btn-margin">Add Notes</a>
                </div>
        </div>
        </div>
    </div>
  );
};

export default CourseDashboard;
