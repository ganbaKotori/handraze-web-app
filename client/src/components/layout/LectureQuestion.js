import React from "react";

const LectureQuestion = () => {
  return (
    
    <div class="container">
        <div class="row">
            
            <div class="col ">
                <h4>Question</h4>
                <h1>Why is 2+2 = 4? </h1>
                <p class="bold"> Submitted by Diego Gonzalez</p>
                <p>Like there’s no scientific proof on this mathematical equality. I think it’s an inequality. I major in human studies so I know a thing or two about proving things wrong. Please reply with serious answers.</p>
                    
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                
                <a type="button" class="btn btn-primary btn-lg center-btn " href="#">Submit Answer</a>

            </div>
            <div class="col-8 " >
                <h4>Answers</h4>
                <div class="jumbotron lectureq">
                    <div class="card lecture-card">
                        <div class="card-body">
                        <b>Garza Replied: </b>
                        What is the point of this question.
                        </div>
                    </div>
                    <div class="card lecture-card">
                        <div class="card-body">
                        <b>Garza Replied: </b>
                        No.
                        </div>
                    </div>

                </div>   
            </div>
        </div>
    </div>

    
  );
};

export default LectureQuestion;
