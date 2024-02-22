import React from "react";
import PropTypes from "prop-types";
import styles from "./O104Carousel.module.scss";

const O104Carousel = ({ title }) => (
  <div className={styles.carousel}>{title}</div>
);

O104Carousel.propTypes = {
  title: PropTypes.string.isRequired,
};

export { O104Carousel };
