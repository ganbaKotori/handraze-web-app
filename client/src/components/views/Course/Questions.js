import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getQuestions } from "../../../actions/question";

const Questions = ({ getQuestions, question: { questions, loading } }) => {
  useEffect(() => {
    getQuestions();
  }, [getQuestions]);
  return <div></div>;
};

Questions.propTypes = {};

const mapStateToProps = state => ({
  getQuestions: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
});

export default connect(mapStateToProps, { getQuestions })(Questions);
