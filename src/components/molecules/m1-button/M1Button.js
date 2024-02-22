import React from "react";
import PropTypes from "prop-types";
import styles from "./M1Button.module.scss";

const M1Button = ({ title }) => <div className={styles.button}>{title}</div>;

M1Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export { M1Button };
