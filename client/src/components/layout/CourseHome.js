import React from "react";

const CourseHome = () => {
  return (
    <div class="container">
        <h1>CECS 229</h1>
        <div class="row">
            <div class="col-2 col-md-4">
            <a href="#" class="btn btn-primary btn-lg btn-block btn-margin">Join Lecture</a>
            <a href="#" class="btn btn-primary btn-lg btn-block btn-margin">Ask Lecture Question</a>

            </div>
            <div class="col-5 col-md-4">
                <h2 class="text-center"> Questions</h2>
                <div class="newsfeed">
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">[Solved] How to upload C# files?</h5>
                            </div>
                            <p class="mb-1">Diego Gonzalez</p>
                            
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">[Open] How to delete files?</h5>
                            </div>
                            <p class="mb-1">Matt Pfiefer</p>
                            
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">[Open] Whats 2+2?</h5>
                            </div>
                            <p class="mb-1">Joe Furt</p>      
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">[Solved] What is the distance to the moon?</h5>
                            </div>
                            <p class="mb-1">Sarah Poster</p>      
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">[Solved] How to find a bug?</h5>
                            </div>
                            <p class="mb-1">Diego Gonzalez</p>      
                        </a>
                    </div>
                    <a href="#" class="btn btn-danger btn-lg btn-block btn-margin">Ask Question</a>
                </div>
            </div>
            <div class="col-5 col-md-4">
            <h2 class="text-center"> Notes</h2>
                <div class="newsfeed">
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"> Chapter 4 Notes</h5>
                            </div>
                            <p class="mb-1">Diego Gonzalez</p>
                            
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"> Chapter 3 Notes</h5>
                            </div>
                            <p class="mb-1">Diego Gonzalez</p>
                            
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"> Chapter 3 Notes</h5>
                            </div>
                            <p class="mb-1">David Camo</p>
                            
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"> Chapter 2/3 Notes</h5>
                            </div>
                            <p class="mb-1">Mike George</p>
                            
                        </a>
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start ">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1"> Chapter 1 Notes</h5>
                            </div>
                            <p class="mb-1">David Garza</p>
                            
                        </a>
                        
                       
                    </div>
                    <a href="#" class="btn btn-danger btn-lg btn-block btn-margin">Ask Question</a>
                </div>
            </div>
        </div>

    </div>
  );
};

export default CourseHome;
