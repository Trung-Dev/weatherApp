import React from "react";
import PropTypes from "prop-types";
import styles from "./M101VerticalForecastUnit.module.scss";

import { A2Icon } from "../../atoms/a2-icon/A2Icon";
import { A5Text } from "../../atoms/a5-text/A5Text";

import { TextStyles, TextWeights } from "../../atoms/a5-text/A5Text.data";

const M101VerticalForecastUnit = ({ iconName, date, temperature }) => (
  <div className={styles.verticalForecastUnit}>
    <A5Text style={TextStyles.m} weight={TextWeights.normal}>
      {date}
    </A5Text>
    <A2Icon iconName={iconName} className={styles.weatherIcon} />
    <A5Text
      style={TextStyles.l}
      weight={TextWeights.normal}
    >{`${temperature}°`}</A5Text>
  </div>
);

M101VerticalForecastUnit.propTypes = {
  iconName: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string]).isRequired,
  temperature: PropTypes.oneOfType([PropTypes.number]).isRequired,
};

export { M101VerticalForecastUnit };
