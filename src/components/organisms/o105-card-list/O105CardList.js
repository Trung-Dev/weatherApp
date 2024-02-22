import React from "react";
import PropTypes from "prop-types";
import styles from "./O105CardList.module.scss";

const O105CardList = ({ title }) => (
  <div className={styles.cardList}>{title}</div>
);

O105CardList.propTypes = {
  title: PropTypes.string.isRequired,
};

export { O105CardList };
