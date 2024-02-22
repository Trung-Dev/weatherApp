import React from "react";
import PropTypes from "prop-types";
import styles from "./M105VerticalForecastDay.module.scss";
import { A2Icon } from "../../atoms/a2-icon/A2Icon";
import { A5Text } from "../../atoms/a5-text/A5Text";
import classNames from "classnames";

const M105VerticalForecastDay = ({ iconName, day, date, minTemperature, maxTemperature, active }) => {

  const contentClassName = classNames(styles.verticalForecastUnit,
    {
      [styles.activeContent]: active
    }
  );
  
  return (
        <div className={styles.verticalForecastContainer} >
          <div className={contentClassName}>
              <div className={styles.verticalForecastDate}>
                <A5Text className={styles.day}>{day}</A5Text>
                <A5Text className={styles.date}>{date}</A5Text>
              </div>
              <A2Icon iconName={iconName} className={styles.weatherIcon} />
              <A5Text className={styles.temperature}>{`${minTemperature}°/${maxTemperature}°`}</A5Text>
          </div>
        </div>
  );
};

M105VerticalForecastDay.propTypes = {
  iconName: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string
  ]).isRequired,
  minTemperature: PropTypes.oneOfType([
    PropTypes.number
  ]).isRequired,
  maxTemperature: PropTypes.oneOfType([
    PropTypes.number
  ]).isRequired,
};

export { M105VerticalForecastDay };
