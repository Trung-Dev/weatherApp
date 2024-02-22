import React from "react";
import PropTypes from "prop-types";
import styles from "./M103SearchBar.module.scss";

const M103SearchBar = ({ title }) => (
  <div className={styles.searchBar}>{title}</div>
);

M103SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export { M103SearchBar };
