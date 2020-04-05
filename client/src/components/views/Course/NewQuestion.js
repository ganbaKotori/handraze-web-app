import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { createCourse } from "../../../actions/course";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import question from "../../../reducers/question";

const CreateCourse = ({ history, createCourse, match }) => {
  const [id, setId] = useState(2);
  useEffect(() => {
    setId(match.params.id);
    console.log(id);
  }, null);
  const [formData, setFormData] = useState({
    question: "",
    description: ""
  });

  const { question, description } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    {
      createCourse(
        {
          id,
          question,
          description
        },
        history
      );
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h2> Ask a Question </h2>
        {id}
        <p>Fill in the form</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label for="question">Question</label>
            <input
              type="text"
              className="form-control"
              id="question"
              name="question"
              value={question}
              onChange={e => onChange(e)}
              placeholder="Fill in your question"
              required
            />
          </div>
          <div className="form-group">
            <label for="email">Description</label>​
            <textarea
              type="textarea"
              className="form-control"
              id="description"
              name="description"
              value={description}
              onChange={e => onChange(e)}
              placeholder="Describe your question"
              required
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Question
          </button>
        </form>
      </div>
    </Fragment>
  );
};

CreateCourse.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { createCourse })(
  withRouter(CreateCourse)
);
