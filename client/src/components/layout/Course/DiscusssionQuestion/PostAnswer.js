import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { postAnswer } from "../../../../actions/question";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import question from "../../../../reducers/question";

const PostAnswer = ({ history, postAnswer, match }) => { 
  const [id, setId] = useState(2);
  useEffect(() => {
    setId(match.params.id);
    console.log(id);
  }, null);
  const [formData, setFormData] = useState({
    text: ""
  });

  const { text} = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    {
      postAnswer(
        {
          id,
          text
        },
        history
      );
    }
  };

  return (
    <Fragment>
      <div className="container">
        <h2> New Reponse to Question </h2>
        {id}
        <p>Fill in the form</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label for="question">Answer</label>
            <input
              type="text"
              className="form-control"
              id="text"
              name="text"
              value={text}
              onChange={e => onChange(e)}
              placeholder="Fill in your answer"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Answer
          </button>
        </form>
      </div>
    </Fragment>
  );
};

PostAnswer.propTypes = {
  postAnswer: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { postAnswer })(
  withRouter(PostAnswer)
);
