import React from "react";
import PropTypes from "prop-types";
import styles from "./M106VerticalForecastSum.module.scss";

import { A2Icon } from "../../atoms/a2-icon/A2Icon";
import { A5Text } from "../../atoms/a5-text/A5Text";

const M106VerticalForecastSum = ({iconName, descriptionText, valueText} ) => (
  <div className={styles.itemList}>
      <A2Icon iconName={iconName} className={styles.icon} />
      <A5Text className={styles.descriptionText}>{descriptionText}</A5Text>
      <A5Text className={styles.valueText}>{valueText}</A5Text>
  </div>
  );

M106VerticalForecastSum.propTypes = {
  iconName: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  descriptionText: PropTypes.oneOfType([PropTypes.string]).isRequired,
  valueText: PropTypes.oneOfType([PropTypes.string]).isRequired,
};

export { M106VerticalForecastSum };
