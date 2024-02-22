import React from "react";
import PropTypes from "prop-types";
import styles from "./O106Navigation.module.scss";

const O106Navigation = ({ title }) => (
  <div className={styles.navigation}>{title}</div>
);

O106Navigation.propTypes = {
  title: PropTypes.string.isRequired,
};

export { O106Navigation };
