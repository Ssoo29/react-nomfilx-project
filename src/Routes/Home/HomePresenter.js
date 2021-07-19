import react from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HomePresenter = ({ nowPlaying, upComing, popular, error, loading }) =>
  null;

HomePresenter.prototype = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;