import React from "react";
import PropTypes from "prop-types";
import styles from "./M100ForecastSummary.module.scss";
import { A5Text } from "../../atoms/a5-text/A5Text";
import { A2Icon } from "../../atoms/a2-icon/A2Icon";

import { TextStyles, TextWeights } from "../../atoms/a5-text/A5Text.data";

const M100ForecastSummary = ({
  iconName,
  city,
  temperature,
  maxTemperature,
  minTemperature,
  className,
}) => (
  <div className={styles.forecastSummary}>
    <A2Icon iconName={iconName} className={styles.weatherIcon} />

    <A5Text
      weight={TextWeights.bold}
      style={TextStyles.xxl}
    >{`${temperature}°`}</A5Text>

    <A5Text className={styles.city} style={TextStyles.l}>
      {city}
    </A5Text>

    <div className={styles.temperatureContainer}>
      <A5Text
        className={styles.temperatureHolder}
        style={TextStyles.l}
      >{`H: ${maxTemperature}°`}</A5Text>
      <A5Text
        className={styles.temperatureHolder}
        style={TextStyles.l}
      >{`L: ${minTemperature}°`}</A5Text>
    </div>
  </div>
);

M100ForecastSummary.propTypes = {
  iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  city: PropTypes.oneOfType([PropTypes.string]).isRequired,
  temperature: PropTypes.oneOfType([PropTypes.number]).isRequired,
  maxTemperature: PropTypes.oneOfType([PropTypes.number]).isRequired,
  minTemperature: PropTypes.oneOfType([PropTypes.number]).isRequired,
  className: PropTypes.string,
};

export { M100ForecastSummary };
