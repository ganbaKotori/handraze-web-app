import React from "react";

const EnrollCourse = () => {
  return (
    <div class="container">

        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Enroll in a new course</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <label for="exampleFormControlInput1">Enrollment Code</label>

                        <input type="text" class="form-control" id="text" placeholder="123456aF" />

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger">Enroll</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default EnrollCourse;
