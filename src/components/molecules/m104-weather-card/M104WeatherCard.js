import React from "react";
import PropTypes from "prop-types";
import styles from "./M104WeatherCard.module.scss";

const M104WeatherCard = ({ title }) => (
  <div className={styles.weatherCard}>{title}</div>
);

M104WeatherCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export { M104WeatherCard };
