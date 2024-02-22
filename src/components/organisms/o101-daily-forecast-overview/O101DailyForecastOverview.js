import React from "react";
import PropTypes from "prop-types";
import styles from "./O101DailyForecastOverview.module.scss";

const O101DailyForecastOverview = ({ title }) => (
  <div className={styles.dailyForecastOverview}>{title}</div>
);

O101DailyForecastOverview.propTypes = {
  title: PropTypes.string.isRequired,
};

export { O101DailyForecastOverview };
